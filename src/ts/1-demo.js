var personWatcher = watch({
    firstName: "b",
    lastName: "a",
    age: 10,
});
personWatcher.on("firstNameChange", function (oldValue, newValue) {
    return console.log("value", newValue, oldValue);
});
