const termTopics = (interviews) => {
  const termTopicsMap = new Map();
  
  interviews.forEach(topic => {
    if (termTopicsMap.has(topic)) {
      termTopicsMap.set(topic, termTopicsMap.get(topic) + 1);
    } else {
      termTopicsMap.set(topic, 1);
    }
  });
  
  return [
    termTopicsMap.get('smart city'),
    termTopicsMap.get('arts funding'),
    termTopicsMap.get('transportation'),
  ];
}