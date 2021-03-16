const parseTime = (item) => {
  return timeConverter(item.split(" ").pop());
};

const timeConverter = (time) => {
  const hour = Number(time.split(":").shift());
  const suffix = hour < 12 ? "AM" : "PM";
  return ((hour + 11) % 12) + 1 + " " + suffix;
};

const parseDate = (item) => {
  return item.split(" ").shift();
};

const parseData = (arr) => {
  const limitedArray = arr.list.slice(0, 9);
  const dataArray = limitedArray.map((item) => {
    return {
      date: parseDate(item.dt_txt),
      time: parseTime(item.dt_txt),
      temperature: Math.floor(item.main.temp),
    };
  });
  return dataArray;
};

export default parseData;
