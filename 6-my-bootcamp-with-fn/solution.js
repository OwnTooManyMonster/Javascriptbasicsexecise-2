function logClass(alumniList) {
  for (let i = 0; i < alumniList.length; i++) {
    console.log(`#${i + 1} ${alumniList[i]}`);
  }
}

logClass(["Alex", "Johannes", "Yvonne", "Shari", "Jörg"]);
