const first = (secondCallback) => {
  console.log("First");
  secondCallback(third);
};

const second = (thirdCallback) => {
  setTimeout(() => {
    console.log("Second");
    thirdCallback(fourth);
  }, 3000);
};

const third = (fourthCallback) => {
  setTimeout(() => {
    console.log("Third");
    fourthCallback();
  }, 3000);
};

const fourth = () => {
    console.log('Fourth');
}

first(second);
