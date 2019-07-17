const getData = () => {
  return JSON.parse(localStorage.getItem('projects'));
};

const setData = (data) => {
  localStorage.setItem('projects', JSON.stringify(data));
};

export { getData, setData };