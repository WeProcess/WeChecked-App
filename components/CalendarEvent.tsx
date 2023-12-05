import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Agenda } from "react-native-calendars";
import { Card } from "react-native-paper";
import Colors from "../constants/Colors";

const timeToString = (time: any) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

interface Items {
  [key: string]: any[];
}

const CalendarEvent = () => {
  const [items, setItems] = React.useState<Items>({});
  const [event_var, setEvent] = useState([]);
  const now = new Date();

  useEffect(() => {
    getEvents();
  }, []);

  async function getEvents() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/calendar.php",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then(async (response) => response.json())
        .then(async (data) => {
          // alert(JSON.stringify(data));
          setEvent(data);
        })
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try. " + error);
    }
  }

  const loadItems = (day: any) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        for (let j = 0; j < event_var.length; j++) {
          if (!items[strTime]) {
            if (strTime == event_var[j]["due_date"]) {
              items[strTime] = [];
            }
          }
        }

        for (let j = 0; j < event_var.length; j++) {
          if (strTime == event_var[j]["due_date"]) {
            items[strTime].push({
              name:
                event_var[j]["activity"] +
                "\n" +
                event_var[j]["applicable_to"] +
                "\n" +
                event_var[j]["act"],
              height: Math.max(10, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }
      const newItems: Items = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Card>
          <Card.Content>
            <View>
              <Text style={styles.bold}>{item.name}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Agenda
        style={styles.bg}
        items={items}
        loadItemsForMonth={loadItems}
        selected={now.toISOString().split("T")[0]}
        refreshControl={undefined}
        showClosingKnob={true}
        refreshing={false}
        renderItem={renderItem}
      />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  bold: {
    fontWeight: "500",
  },
  bg: {
    backgroundColor: Colors.background,
  },
});

export default CalendarEvent;
