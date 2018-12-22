function findProf() {
  //get prof name from clipboard
  var pasteDiv = document.createElement("div");
  pasteDiv.style.position = "absolute";
  pasteDiv.style.left = "-10000px";
  pasteDiv.style.top = "-10000px";
  pasteDiv.contentEditable = true;
  var insertionElement = document.activeElement;
  var nodeName = insertionElement.nodeName.toLowerCase();
  while (
    nodeName !== "body" &&
    nodeName !== "div" &&
    nodeName !== "li" &&
    nodeName !== "th" &&
    nodeName !== "td"
  ) {
    insertionElement = insertionElement.parentNode;
    nodeName = insertionElement.nodeName.toLowerCase();
  }
  insertionElement.appendChild(pasteDiv);
  pasteDiv.focus();
  document.execCommand("paste");
  var clipboardText = pasteDiv.innerText;
  insertionElement.removeChild(pasteDiv);
  let profname = clipboardText.split(", ");
  let lastname = profname[0];
  let firstname = profname[1];
  //rmp profid array
  const rawdata = [
    {
      teacherlastname_t: "Rybolt",
      pk_id: 206335,
      schoolid_s: "73",
      averageratingscore_rf: 2.47,
      total_number_of_ratings_i: 59,
      teacherfirstname_t: "William"
    },
    {
      teacherlastname_t: "Hodge",
      pk_id: 327544,
      schoolid_s: "73",
      averageratingscore_rf: 3.8,
      total_number_of_ratings_i: 57,
      teacherfirstname_t: "Jon"
    },
    {
      teacherlastname_t: "Fetters",
      pk_id: 1239411,
      schoolid_s: "73",
      averageratingscore_rf: 4.5,
      total_number_of_ratings_i: 48,
      teacherfirstname_t: "Michael"
    },
    {
      teacherlastname_t: "Graham",
      pk_id: 907876,
      schoolid_s: "73",
      averageratingscore_rf: 3.7,
      total_number_of_ratings_i: 41,
      teacherfirstname_t: "Michelle"
    },
    {
      teacherlastname_t: "Rourke",
      pk_id: 550049,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 37,
      teacherfirstname_t: "Kerry"
    },
    {
      teacherlastname_t: "Godwyn",
      pk_id: 265943,
      schoolid_s: "73",
      averageratingscore_rf: 3.74,
      total_number_of_ratings_i: 36,
      teacherfirstname_t: "Mary"
    },
    {
      teacherlastname_t: "Argyros",
      pk_id: 943444,
      schoolid_s: "73",
      averageratingscore_rf: 4.22,
      total_number_of_ratings_i: 34,
      teacherfirstname_t: "Ellen"
    },
    {
      teacherlastname_t: "Azcona",
      pk_id: 1191752,
      schoolid_s: "73",
      averageratingscore_rf: 1.98,
      total_number_of_ratings_i: 31,
      teacherfirstname_t: "Nestor"
    },
    {
      teacherlastname_t: "Lester",
      pk_id: 693773,
      schoolid_s: "73",
      averageratingscore_rf: 3.86,
      total_number_of_ratings_i: 29,
      teacherfirstname_t: "Toni"
    },
    {
      teacherlastname_t: "Coyle",
      pk_id: 536687,
      schoolid_s: "73",
      averageratingscore_rf: 4.76,
      total_number_of_ratings_i: 27,
      teacherfirstname_t: "William"
    },
    {
      teacherlastname_t: "Troughton",
      pk_id: 1793157,
      schoolid_s: "73",
      averageratingscore_rf: 3.4,
      total_number_of_ratings_i: 27,
      teacherfirstname_t: "Howard"
    },
    {
      teacherlastname_t: "Mills",
      pk_id: 1946433,
      schoolid_s: "73",
      averageratingscore_rf: 3.3,
      total_number_of_ratings_i: 27,
      teacherfirstname_t: "Adam"
    },
    {
      teacherlastname_t: "Gilleran",
      pk_id: 210599,
      schoolid_s: "73",
      averageratingscore_rf: 4.2,
      total_number_of_ratings_i: 25,
      teacherfirstname_t: "Ruth"
    },
    {
      teacherlastname_t: "Mandel",
      pk_id: 748520,
      schoolid_s: "73",
      averageratingscore_rf: 4.3,
      total_number_of_ratings_i: 25,
      teacherfirstname_t: "Richard"
    },
    {
      teacherlastname_t: "Kaplan",
      pk_id: 1592135,
      schoolid_s: "73",
      averageratingscore_rf: 2.7,
      total_number_of_ratings_i: 25,
      teacherfirstname_t: "Theodore"
    },
    {
      teacherlastname_t: "Opie",
      pk_id: 1706267,
      schoolid_s: "73",
      averageratingscore_rf: 2.9,
      total_number_of_ratings_i: 25,
      teacherfirstname_t: "Fredrick"
    },
    {
      teacherlastname_t: "Yellin",
      pk_id: 420887,
      schoolid_s: "73",
      averageratingscore_rf: 2.8,
      total_number_of_ratings_i: 24,
      teacherfirstname_t: "Janice"
    },
    {
      teacherlastname_t: "Halsey",
      pk_id: 943450,
      schoolid_s: "73",
      averageratingscore_rf: 4.5,
      total_number_of_ratings_i: 24,
      teacherfirstname_t: "Robert"
    },
    {
      teacherlastname_t: "Wain",
      pk_id: 442568,
      schoolid_s: "73",
      averageratingscore_rf: 3.3,
      total_number_of_ratings_i: 23,
      teacherfirstname_t: "Tony"
    },
    {
      teacherlastname_t: "Smith",
      pk_id: 522117,
      schoolid_s: "73",
      averageratingscore_rf: 2.41,
      total_number_of_ratings_i: 23,
      teacherfirstname_t: "Lawrence"
    },
    {
      teacherlastname_t: "Martin",
      pk_id: 799677,
      schoolid_s: "73",
      averageratingscore_rf: 3.8,
      total_number_of_ratings_i: 23,
      teacherfirstname_t: "Michael"
    },
    {
      teacherlastname_t: "Kirschner",
      pk_id: 866539,
      schoolid_s: "73",
      averageratingscore_rf: 4.6,
      total_number_of_ratings_i: 23,
      teacherfirstname_t: "Cheryl"
    },
    {
      teacherlastname_t: "Schmitz",
      pk_id: 1047540,
      schoolid_s: "73",
      averageratingscore_rf: 4.7,
      total_number_of_ratings_i: 23,
      teacherfirstname_t: "Paul"
    },
    {
      teacherlastname_t: "Collins",
      pk_id: 136735,
      schoolid_s: "73",
      averageratingscore_rf: 3.48,
      total_number_of_ratings_i: 22,
      teacherfirstname_t: "Stephen"
    },
    {
      teacherlastname_t: "Levinson",
      pk_id: 528997,
      schoolid_s: "73",
      averageratingscore_rf: 4.8,
      total_number_of_ratings_i: 22,
      teacherfirstname_t: "Julie"
    },
    {
      teacherlastname_t: "Waite",
      pk_id: 869194,
      schoolid_s: "73",
      averageratingscore_rf: 4.11,
      total_number_of_ratings_i: 22,
      teacherfirstname_t: "Ronald"
    },
    {
      teacherlastname_t: "Ehrlich",
      pk_id: 907882,
      schoolid_s: "73",
      averageratingscore_rf: 4.3,
      total_number_of_ratings_i: 22,
      teacherfirstname_t: "Craig"
    },
    {
      teacherlastname_t: "Huss",
      pk_id: 1054110,
      schoolid_s: "73",
      averageratingscore_rf: 2.9,
      total_number_of_ratings_i: 22,
      teacherfirstname_t: "Bill"
    },
    {
      teacherlastname_t: "O'Donoghue",
      pk_id: 210602,
      schoolid_s: "73",
      averageratingscore_rf: 4.4,
      total_number_of_ratings_i: 21,
      teacherfirstname_t: "Mary"
    },
    {
      teacherlastname_t: "Govoni",
      pk_id: 803312,
      schoolid_s: "73",
      averageratingscore_rf: 3.26,
      total_number_of_ratings_i: 21,
      teacherfirstname_t: "Norman"
    },
    {
      teacherlastname_t: "Troxell",
      pk_id: 1054099,
      schoolid_s: "73",
      averageratingscore_rf: 4.26,
      total_number_of_ratings_i: 21,
      teacherfirstname_t: "Denise"
    },
    {
      teacherlastname_t: "Reilly",
      pk_id: 1459573,
      schoolid_s: "73",
      averageratingscore_rf: 4.2,
      total_number_of_ratings_i: 21,
      teacherfirstname_t: "Terry"
    },
    {
      teacherlastname_t: "Bruyneel",
      pk_id: 208927,
      schoolid_s: "73",
      averageratingscore_rf: 4.7,
      total_number_of_ratings_i: 20,
      teacherfirstname_t: "Kevin"
    },
    {
      teacherlastname_t: "Goldstein",
      pk_id: 243024,
      schoolid_s: "73",
      averageratingscore_rf: 3.2,
      total_number_of_ratings_i: 20,
      teacherfirstname_t: "Michael"
    },
    {
      teacherlastname_t: "Seitz",
      pk_id: 473930,
      schoolid_s: "73",
      averageratingscore_rf: 4.5,
      total_number_of_ratings_i: 20,
      teacherfirstname_t: "Brian"
    },
    {
      teacherlastname_t: "Dewire",
      pk_id: 524257,
      schoolid_s: "73",
      averageratingscore_rf: 2.8,
      total_number_of_ratings_i: 20,
      teacherfirstname_t: "Dawna"
    },
    {
      teacherlastname_t: "McKenzie",
      pk_id: 528421,
      schoolid_s: "73",
      averageratingscore_rf: 1.73,
      total_number_of_ratings_i: 20,
      teacherfirstname_t: "John"
    },
    {
      teacherlastname_t: "Emdad",
      pk_id: 1832284,
      schoolid_s: "73",
      averageratingscore_rf: 3.68,
      total_number_of_ratings_i: 20,
      teacherfirstname_t: "Fatemeh"
    },
    {
      teacherlastname_t: "Shulman",
      pk_id: 1360404,
      schoolid_s: "73",
      averageratingscore_rf: 4.08,
      total_number_of_ratings_i: 19,
      teacherfirstname_t: "Joel"
    },
    {
      teacherlastname_t: "Korsak",
      pk_id: 1561270,
      schoolid_s: "73",
      averageratingscore_rf: 4.1,
      total_number_of_ratings_i: 19,
      teacherfirstname_t: "John"
    },
    {
      teacherlastname_t: "Goldberg",
      pk_id: 190974,
      schoolid_s: "73",
      averageratingscore_rf: 4.67,
      total_number_of_ratings_i: 18,
      teacherfirstname_t: "Elizabeth"
    },
    {
      teacherlastname_t: "Bortman",
      pk_id: 208923,
      schoolid_s: "73",
      averageratingscore_rf: 4.17,
      total_number_of_ratings_i: 18,
      teacherfirstname_t: "Eli"
    },
    {
      teacherlastname_t: "Pinard",
      pk_id: 1047618,
      schoolid_s: "73",
      averageratingscore_rf: 3.7,
      total_number_of_ratings_i: 18,
      teacherfirstname_t: "Mary"
    },
    {
      teacherlastname_t: "Kouzehkanani",
      pk_id: 1576063,
      schoolid_s: "73",
      averageratingscore_rf: 2.44,
      total_number_of_ratings_i: 18,
      teacherfirstname_t: "Amir"
    },
    {
      teacherlastname_t: "Farber",
      pk_id: 1887884,
      schoolid_s: "73",
      averageratingscore_rf: 4.28,
      total_number_of_ratings_i: 18,
      teacherfirstname_t: "Ira"
    },
    {
      teacherlastname_t: "Prichett",
      pk_id: 739537,
      schoolid_s: "73",
      averageratingscore_rf: 4.21,
      total_number_of_ratings_i: 17,
      teacherfirstname_t: "Gordon"
    },
    {
      teacherlastname_t: "Parker",
      pk_id: 829212,
      schoolid_s: "73",
      averageratingscore_rf: 1.85,
      total_number_of_ratings_i: 17,
      teacherfirstname_t: "Ken"
    },
    {
      teacherlastname_t: "Feld",
      pk_id: 844099,
      schoolid_s: "73",
      averageratingscore_rf: 4.2,
      total_number_of_ratings_i: 17,
      teacherfirstname_t: "Marjorie"
    },
    {
      teacherlastname_t: "Recck",
      pk_id: 1247628,
      schoolid_s: "73",
      averageratingscore_rf: 3.7,
      total_number_of_ratings_i: 17,
      teacherfirstname_t: "George"
    },
    {
      teacherlastname_t: "Donovan",
      pk_id: 1316850,
      schoolid_s: "73",
      averageratingscore_rf: 3.4,
      total_number_of_ratings_i: 17,
      teacherfirstname_t: "Kellie"
    },
    {
      teacherlastname_t: "Buttacavoli",
      pk_id: 1335759,
      schoolid_s: "73",
      averageratingscore_rf: 4.8,
      total_number_of_ratings_i: 17,
      teacherfirstname_t: "Thomas"
    },
    {
      teacherlastname_t: "Ellis",
      pk_id: 1435289,
      schoolid_s: "73",
      averageratingscore_rf: 3.5,
      total_number_of_ratings_i: 17,
      teacherfirstname_t: "Jennifer"
    },
    {
      teacherlastname_t: "Karst",
      pk_id: 1625489,
      schoolid_s: "73",
      averageratingscore_rf: 3.8,
      total_number_of_ratings_i: 17,
      teacherfirstname_t: "Nathan"
    },
    {
      teacherlastname_t: "Green",
      pk_id: 1641563,
      schoolid_s: "73",
      averageratingscore_rf: 3.12,
      total_number_of_ratings_i: 17,
      teacherfirstname_t: "Kathrine"
    },
    {
      teacherlastname_t: "Polutnik",
      pk_id: 442567,
      schoolid_s: "73",
      averageratingscore_rf: 2.56,
      total_number_of_ratings_i: 16,
      teacherfirstname_t: "Lidija"
    },
    {
      teacherlastname_t: "Mathaisel",
      pk_id: 1070649,
      schoolid_s: "73",
      averageratingscore_rf: 3.4,
      total_number_of_ratings_i: 16,
      teacherfirstname_t: "Dennis"
    },
    {
      teacherlastname_t: "Wynstra",
      pk_id: 1508366,
      schoolid_s: "73",
      averageratingscore_rf: 4.38,
      total_number_of_ratings_i: 16,
      teacherfirstname_t: "Beth"
    },
    {
      teacherlastname_t: "Fischer",
      pk_id: 1720936,
      schoolid_s: "73",
      averageratingscore_rf: 3.7,
      total_number_of_ratings_i: 16,
      teacherfirstname_t: "Katrin"
    },
    {
      teacherlastname_t: "Blanchette-Proulx",
      pk_id: 1720938,
      schoolid_s: "73",
      averageratingscore_rf: 3.9,
      total_number_of_ratings_i: 16,
      teacherfirstname_t: "Shay"
    },
    {
      teacherlastname_t: "Miller",
      pk_id: 1753752,
      schoolid_s: "73",
      averageratingscore_rf: 4.5,
      total_number_of_ratings_i: 16,
      teacherfirstname_t: "Weston"
    },
    {
      teacherlastname_t: "Harris",
      pk_id: 417406,
      schoolid_s: "73",
      averageratingscore_rf: 4.3,
      total_number_of_ratings_i: 15,
      teacherfirstname_t: "Neil"
    },
    {
      teacherlastname_t: "Stoddard",
      pk_id: 449143,
      schoolid_s: "73",
      averageratingscore_rf: 3.1,
      total_number_of_ratings_i: 15,
      teacherfirstname_t: "Donna"
    },
    {
      teacherlastname_t: "Kopp",
      pk_id: 669995,
      schoolid_s: "73",
      averageratingscore_rf: 3.33,
      total_number_of_ratings_i: 15,
      teacherfirstname_t: "Robert"
    },
    {
      teacherlastname_t: "Bethel",
      pk_id: 1000162,
      schoolid_s: "73",
      averageratingscore_rf: 3.2,
      total_number_of_ratings_i: 15,
      teacherfirstname_t: "Jennifer"
    },
    {
      teacherlastname_t: "George",
      pk_id: 1051458,
      schoolid_s: "73",
      averageratingscore_rf: 2.8,
      total_number_of_ratings_i: 15,
      teacherfirstname_t: "Bradley"
    },
    {
      teacherlastname_t: "Gertz",
      pk_id: 1072035,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 15,
      teacherfirstname_t: "Dwight"
    },
    {
      teacherlastname_t: "Dietrick",
      pk_id: 1125726,
      schoolid_s: "73",
      averageratingscore_rf: 4.8,
      total_number_of_ratings_i: 15,
      teacherfirstname_t: "John"
    },
    {
      teacherlastname_t: "Alexander",
      pk_id: 1421956,
      schoolid_s: "73",
      averageratingscore_rf: 2.5,
      total_number_of_ratings_i: 15,
      teacherfirstname_t: "Barbara"
    },
    {
      teacherlastname_t: "Stephenson",
      pk_id: 533478,
      schoolid_s: "73",
      averageratingscore_rf: 4.71,
      total_number_of_ratings_i: 14,
      teacherfirstname_t: "Craig"
    },
    {
      teacherlastname_t: "Pattridge",
      pk_id: 852052,
      schoolid_s: "73",
      averageratingscore_rf: 3.8,
      total_number_of_ratings_i: 14,
      teacherfirstname_t: "Blake"
    },
    {
      teacherlastname_t: "McAuliffe",
      pk_id: 1484418,
      schoolid_s: "73",
      averageratingscore_rf: 2.2,
      total_number_of_ratings_i: 14,
      teacherfirstname_t: "Robert"
    },
    {
      teacherlastname_t: "Weil",
      pk_id: 1792084,
      schoolid_s: "73",
      averageratingscore_rf: 4.5,
      total_number_of_ratings_i: 14,
      teacherfirstname_t: "Amy"
    },
    {
      teacherlastname_t: "Sulkowski",
      pk_id: 2037706,
      schoolid_s: "73",
      averageratingscore_rf: 4.2,
      total_number_of_ratings_i: 14,
      teacherfirstname_t: "Adam"
    },
    {
      teacherlastname_t: "Krigman",
      pk_id: 561728,
      schoolid_s: "73",
      averageratingscore_rf: 4.4,
      total_number_of_ratings_i: 13,
      teacherfirstname_t: "Laurie"
    },
    {
      teacherlastname_t: "Deets",
      pk_id: 869193,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 13,
      teacherfirstname_t: "S"
    },
    {
      teacherlastname_t: "Soybel",
      pk_id: 928452,
      schoolid_s: "73",
      averageratingscore_rf: 4.7,
      total_number_of_ratings_i: 13,
      teacherfirstname_t: "Virginia"
    },
    {
      teacherlastname_t: "Miller",
      pk_id: 1228585,
      schoolid_s: "73",
      averageratingscore_rf: 2.69,
      total_number_of_ratings_i: 13,
      teacherfirstname_t: "Kara"
    },
    {
      teacherlastname_t: "Bauer",
      pk_id: 1476404,
      schoolid_s: "73",
      averageratingscore_rf: 3.31,
      total_number_of_ratings_i: 13,
      teacherfirstname_t: "Stephen"
    },
    {
      teacherlastname_t: "Shimoff",
      pk_id: 1639368,
      schoolid_s: "73",
      averageratingscore_rf: 4.42,
      total_number_of_ratings_i: 13,
      teacherfirstname_t: "Aaron"
    },
    {
      teacherlastname_t: "Hauf",
      pk_id: 133512,
      schoolid_s: "73",
      averageratingscore_rf: 3.3,
      total_number_of_ratings_i: 12,
      teacherfirstname_t: "Kandice"
    },
    {
      teacherlastname_t: "Hunt",
      pk_id: 442565,
      schoolid_s: "73",
      averageratingscore_rf: 4.2,
      total_number_of_ratings_i: 12,
      teacherfirstname_t: "James"
    },
    {
      teacherlastname_t: "Casey",
      pk_id: 750002,
      schoolid_s: "73",
      averageratingscore_rf: 3.42,
      total_number_of_ratings_i: 12,
      teacherfirstname_t: "William"
    },
    {
      teacherlastname_t: "Erzurumlu",
      pk_id: 1060806,
      schoolid_s: "73",
      averageratingscore_rf: 3.8,
      total_number_of_ratings_i: 12,
      teacherfirstname_t: "Sinan"
    },
    {
      teacherlastname_t: "Leonard",
      pk_id: 1557353,
      schoolid_s: "73",
      averageratingscore_rf: 3.4,
      total_number_of_ratings_i: 12,
      teacherfirstname_t: "Melissa"
    },
    {
      teacherlastname_t: "Chan",
      pk_id: 2186106,
      schoolid_s: "73",
      averageratingscore_rf: 4.5,
      total_number_of_ratings_i: 12,
      teacherfirstname_t: "Eric"
    },
    {
      teacherlastname_t: "Grewal",
      pk_id: 442564,
      schoolid_s: "73",
      averageratingscore_rf: 3.32,
      total_number_of_ratings_i: 11,
      teacherfirstname_t: "Dhruv"
    },
    {
      teacherlastname_t: "Winrich",
      pk_id: 701587,
      schoolid_s: "73",
      averageratingscore_rf: 3.6,
      total_number_of_ratings_i: 11,
      teacherfirstname_t: "Chuck"
    },
    {
      teacherlastname_t: "Cohan",
      pk_id: 857618,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 11,
      teacherfirstname_t: "Peter"
    },
    {
      teacherlastname_t: "Kelly",
      pk_id: 904076,
      schoolid_s: "73",
      averageratingscore_rf: 2.95,
      total_number_of_ratings_i: 11,
      teacherfirstname_t: "Kathleen"
    },
    {
      teacherlastname_t: "Graham",
      pk_id: 1627969,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 11,
      teacherfirstname_t: "Sandra"
    },
    {
      teacherlastname_t: "Li",
      pk_id: 1630429,
      schoolid_s: "73",
      averageratingscore_rf: 3.9,
      total_number_of_ratings_i: 11,
      teacherfirstname_t: "Xinghua"
    },
    {
      teacherlastname_t: "Slegers",
      pk_id: 1631971,
      schoolid_s: "73",
      averageratingscore_rf: 4.1,
      total_number_of_ratings_i: 11,
      teacherfirstname_t: "Rosa"
    },
    {
      teacherlastname_t: "Goulding",
      pk_id: 1933602,
      schoolid_s: "73",
      averageratingscore_rf: 4.7,
      total_number_of_ratings_i: 11,
      teacherfirstname_t: "Richard"
    },
    {
      teacherlastname_t: "Zafari",
      pk_id: 2181635,
      schoolid_s: "73",
      averageratingscore_rf: 4.4,
      total_number_of_ratings_i: 11,
      teacherfirstname_t: "Babak"
    },
    {
      teacherlastname_t: "Balaguer",
      pk_id: 50033,
      schoolid_s: "73",
      averageratingscore_rf: 3.25,
      total_number_of_ratings_i: 10,
      teacherfirstname_t: "Nancy"
    },
    {
      teacherlastname_t: "Rao",
      pk_id: 133619,
      schoolid_s: "73",
      averageratingscore_rf: 2.4,
      total_number_of_ratings_i: 10,
      teacherfirstname_t: "Jau"
    },
    {
      teacherlastname_t: "Aieta",
      pk_id: 210604,
      schoolid_s: "73",
      averageratingscore_rf: 3.0,
      total_number_of_ratings_i: 10,
      teacherfirstname_t: "Joe"
    },
    {
      teacherlastname_t: "Deneault",
      pk_id: 524262,
      schoolid_s: "73",
      averageratingscore_rf: 4.75,
      total_number_of_ratings_i: 10,
      teacherfirstname_t: "Henry"
    },
    {
      teacherlastname_t: "Eriksen",
      pk_id: 906889,
      schoolid_s: "73",
      averageratingscore_rf: 3.9,
      total_number_of_ratings_i: 10,
      teacherfirstname_t: "Steven"
    },
    {
      teacherlastname_t: "Fisher",
      pk_id: 1011197,
      schoolid_s: "73",
      averageratingscore_rf: 4.2,
      total_number_of_ratings_i: 10,
      teacherfirstname_t: "Jon"
    },
    {
      teacherlastname_t: "Chopra",
      pk_id: 1222906,
      schoolid_s: "73",
      averageratingscore_rf: 3.55,
      total_number_of_ratings_i: 10,
      teacherfirstname_t: "Ankush"
    },
    {
      teacherlastname_t: "Shankar",
      pk_id: 1427946,
      schoolid_s: "73",
      averageratingscore_rf: 4.5,
      total_number_of_ratings_i: 10,
      teacherfirstname_t: "Ganesan"
    },
    {
      teacherlastname_t: "Yamakawa",
      pk_id: 1730288,
      schoolid_s: "73",
      averageratingscore_rf: 4.6,
      total_number_of_ratings_i: 10,
      teacherfirstname_t: "Yasuhiro"
    },
    {
      teacherlastname_t: "Nersessian",
      pk_id: 2141878,
      schoolid_s: "73",
      averageratingscore_rf: 4.9,
      total_number_of_ratings_i: 10,
      teacherfirstname_t: "David"
    },
    {
      teacherlastname_t: "Bliss",
      pk_id: 133647,
      schoolid_s: "73",
      averageratingscore_rf: 4.3,
      total_number_of_ratings_i: 9,
      teacherfirstname_t: "Dick"
    },
    {
      teacherlastname_t: "Shapiro",
      pk_id: 196871,
      schoolid_s: "73",
      averageratingscore_rf: 3.5,
      total_number_of_ratings_i: 9,
      teacherfirstname_t: "Stephen"
    },
    {
      teacherlastname_t: "Tropp",
      pk_id: 264911,
      schoolid_s: "73",
      averageratingscore_rf: 4.06,
      total_number_of_ratings_i: 9,
      teacherfirstname_t: "Martin"
    },
    {
      teacherlastname_t: "Bonnevie",
      pk_id: 287935,
      schoolid_s: "73",
      averageratingscore_rf: 4.61,
      total_number_of_ratings_i: 9,
      teacherfirstname_t: "Robert"
    },
    {
      teacherlastname_t: "Schwartz",
      pk_id: 457344,
      schoolid_s: "73",
      averageratingscore_rf: 1.17,
      total_number_of_ratings_i: 9,
      teacherfirstname_t: "Mike"
    },
    {
      teacherlastname_t: "Hevertt",
      pk_id: 488523,
      schoolid_s: "73",
      averageratingscore_rf: 3.83,
      total_number_of_ratings_i: 9,
      teacherfirstname_t: "K"
    },
    {
      teacherlastname_t: "Dambolena",
      pk_id: 502488,
      schoolid_s: "73",
      averageratingscore_rf: 3.5,
      total_number_of_ratings_i: 9,
      teacherfirstname_t: "Ismael"
    },
    {
      teacherlastname_t: "Turner",
      pk_id: 533475,
      schoolid_s: "73",
      averageratingscore_rf: 4.5,
      total_number_of_ratings_i: 9,
      teacherfirstname_t: "Robert"
    },
    {
      teacherlastname_t: "Moland",
      pk_id: 586896,
      schoolid_s: "73",
      averageratingscore_rf: 3.61,
      total_number_of_ratings_i: 9,
      teacherfirstname_t: "Lydia"
    },
    {
      teacherlastname_t: "Dhebar",
      pk_id: 711923,
      schoolid_s: "73",
      averageratingscore_rf: 4.3,
      total_number_of_ratings_i: 9,
      teacherfirstname_t: "Anirudh"
    },
    {
      teacherlastname_t: "Cass",
      pk_id: 752217,
      schoolid_s: "73",
      averageratingscore_rf: 3.61,
      total_number_of_ratings_i: 9,
      teacherfirstname_t: "Colin"
    },
    {
      teacherlastname_t: "Potter",
      pk_id: 777670,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 9,
      teacherfirstname_t: "Mark"
    },
    {
      teacherlastname_t: "Platt",
      pk_id: 1190778,
      schoolid_s: "73",
      averageratingscore_rf: 3.5,
      total_number_of_ratings_i: 9,
      teacherfirstname_t: "Katherine"
    },
    {
      teacherlastname_t: "Fleischman",
      pk_id: 1557902,
      schoolid_s: "73",
      averageratingscore_rf: 4.1,
      total_number_of_ratings_i: 9,
      teacherfirstname_t: "Fritz"
    },
    {
      teacherlastname_t: "Noyes",
      pk_id: 1614071,
      schoolid_s: "73",
      averageratingscore_rf: 4.8,
      total_number_of_ratings_i: 9,
      teacherfirstname_t: "Eric"
    },
    {
      teacherlastname_t: "Caslin",
      pk_id: 1734834,
      schoolid_s: "73",
      averageratingscore_rf: 4.89,
      total_number_of_ratings_i: 9,
      teacherfirstname_t: "Micheal"
    },
    {
      teacherlastname_t: "Marthinsen",
      pk_id: 218111,
      schoolid_s: "73",
      averageratingscore_rf: 3.2,
      total_number_of_ratings_i: 8,
      teacherfirstname_t: "John"
    },
    {
      teacherlastname_t: "Harrington",
      pk_id: 258224,
      schoolid_s: "73",
      averageratingscore_rf: 3.38,
      total_number_of_ratings_i: 8,
      teacherfirstname_t: "Diana"
    },
    {
      teacherlastname_t: "Neck",
      pk_id: 631590,
      schoolid_s: "73",
      averageratingscore_rf: 4.06,
      total_number_of_ratings_i: 8,
      teacherfirstname_t: "Heidi"
    },
    {
      teacherlastname_t: "Green",
      pk_id: 820487,
      schoolid_s: "73",
      averageratingscore_rf: 4.63,
      total_number_of_ratings_i: 8,
      teacherfirstname_t: "Leonard"
    },
    {
      teacherlastname_t: "Bayer",
      pk_id: 928457,
      schoolid_s: "73",
      averageratingscore_rf: 2.69,
      total_number_of_ratings_i: 8,
      teacherfirstname_t: "Arthur"
    },
    {
      teacherlastname_t: "Der",
      pk_id: 1184324,
      schoolid_s: "73",
      averageratingscore_rf: 3.81,
      total_number_of_ratings_i: 8,
      teacherfirstname_t: "Ken"
    },
    {
      teacherlastname_t: "Stamm",
      pk_id: 1281174,
      schoolid_s: "73",
      averageratingscore_rf: 2.0,
      total_number_of_ratings_i: 8,
      teacherfirstname_t: "John"
    },
    {
      teacherlastname_t: "Carenzo",
      pk_id: 1575443,
      schoolid_s: "73",
      averageratingscore_rf: 4.1,
      total_number_of_ratings_i: 8,
      teacherfirstname_t: "Michael"
    },
    {
      teacherlastname_t: "Gai",
      pk_id: 1642987,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 8,
      teacherfirstname_t: "Yunwei"
    },
    {
      teacherlastname_t: "Bossi",
      pk_id: 2058702,
      schoolid_s: "73",
      averageratingscore_rf: 1.25,
      total_number_of_ratings_i: 8,
      teacherfirstname_t: "Patricia "
    },
    {
      teacherlastname_t: "Lert",
      pk_id: 2170787,
      schoolid_s: "73",
      averageratingscore_rf: 3.7,
      total_number_of_ratings_i: 8,
      teacherfirstname_t: "Peter"
    },
    {
      teacherlastname_t: "Spiess",
      pk_id: 2327204,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 8,
      teacherfirstname_t: "Stephen"
    },
    {
      teacherlastname_t: "Bozewicz",
      pk_id: 208383,
      schoolid_s: "73",
      averageratingscore_rf: 2.71,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "Jane"
    },
    {
      teacherlastname_t: "Kopsco",
      pk_id: 442563,
      schoolid_s: "73",
      averageratingscore_rf: 2.57,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "David"
    },
    {
      teacherlastname_t: "Colletta",
      pk_id: 524253,
      schoolid_s: "73",
      averageratingscore_rf: 4.93,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "Lisa"
    },
    {
      teacherlastname_t: "Saber",
      pk_id: 752209,
      schoolid_s: "73",
      averageratingscore_rf: 3.14,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "John"
    },
    {
      teacherlastname_t: "Hotchkiss",
      pk_id: 1044509,
      schoolid_s: "73",
      averageratingscore_rf: 4.79,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "Carolyn"
    },
    {
      teacherlastname_t: "Edmunds",
      pk_id: 1087252,
      schoolid_s: "73",
      averageratingscore_rf: 2.8,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "John"
    },
    {
      teacherlastname_t: "Davies",
      pk_id: 1135005,
      schoolid_s: "73",
      averageratingscore_rf: 2.5,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "Ryan"
    },
    {
      teacherlastname_t: "Chartier",
      pk_id: 1223384,
      schoolid_s: "73",
      averageratingscore_rf: 4.36,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "Frederic"
    },
    {
      teacherlastname_t: "Adams",
      pk_id: 1554493,
      schoolid_s: "73",
      averageratingscore_rf: 1.71,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "Spencer"
    },
    {
      teacherlastname_t: "Manning",
      pk_id: 1614077,
      schoolid_s: "73",
      averageratingscore_rf: 4.14,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "Catherine"
    },
    {
      teacherlastname_t: "Santinelli",
      pk_id: 1635010,
      schoolid_s: "73",
      averageratingscore_rf: 4.6,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "Angelo"
    },
    {
      teacherlastname_t: "Jeffus",
      pk_id: 1676639,
      schoolid_s: "73",
      averageratingscore_rf: 3.0,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "Wendy"
    },
    {
      teacherlastname_t: "Ricciardi",
      pk_id: 1742347,
      schoolid_s: "73",
      averageratingscore_rf: 3.36,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "Joseph"
    },
    {
      teacherlastname_t: "Bailey",
      pk_id: 1910152,
      schoolid_s: "73",
      averageratingscore_rf: 4.07,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "Jennifer"
    },
    {
      teacherlastname_t: "Bal",
      pk_id: 1945477,
      schoolid_s: "73",
      averageratingscore_rf: 3.0,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "Anjali"
    },
    {
      teacherlastname_t: "Wall",
      pk_id: 2032511,
      schoolid_s: "73",
      averageratingscore_rf: 2.71,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "Kevin"
    },
    {
      teacherlastname_t: "Getchell",
      pk_id: 2140839,
      schoolid_s: "73",
      averageratingscore_rf: 4.1,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "Kristen"
    },
    {
      teacherlastname_t: "Barry",
      pk_id: 2205465,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "Robert"
    },
    {
      teacherlastname_t: "Amovic",
      pk_id: 2267858,
      schoolid_s: "73",
      averageratingscore_rf: 4.3,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "Bojan"
    },
    {
      teacherlastname_t: "Wu",
      pk_id: 2293215,
      schoolid_s: "73",
      averageratingscore_rf: 4.3,
      total_number_of_ratings_i: 7,
      teacherfirstname_t: "Hongsheng"
    },
    {
      teacherlastname_t: "Petty",
      pk_id: 442566,
      schoolid_s: "73",
      averageratingscore_rf: 4.3,
      total_number_of_ratings_i: 6,
      teacherfirstname_t: "Ross"
    },
    {
      teacherlastname_t: "Dicarlo",
      pk_id: 538268,
      schoolid_s: "73",
      averageratingscore_rf: 2.58,
      total_number_of_ratings_i: 6,
      teacherfirstname_t: "Lisa"
    },
    {
      teacherlastname_t: "Litman",
      pk_id: 754166,
      schoolid_s: "73",
      averageratingscore_rf: 1.5,
      total_number_of_ratings_i: 6,
      teacherfirstname_t: "Ellen"
    },
    {
      teacherlastname_t: "Williams",
      pk_id: 966996,
      schoolid_s: "73",
      averageratingscore_rf: 3.0,
      total_number_of_ratings_i: 6,
      teacherfirstname_t: "Joanne"
    },
    {
      teacherlastname_t: "Cummings",
      pk_id: 1041052,
      schoolid_s: "73",
      averageratingscore_rf: 2.67,
      total_number_of_ratings_i: 6,
      teacherfirstname_t: "Michael"
    },
    {
      teacherlastname_t: "Coleman",
      pk_id: 1190777,
      schoolid_s: "73",
      averageratingscore_rf: 2.92,
      total_number_of_ratings_i: 6,
      teacherfirstname_t: "Lindsay"
    },
    {
      teacherlastname_t: "Rademacher",
      pk_id: 1207123,
      schoolid_s: "73",
      averageratingscore_rf: 4.83,
      total_number_of_ratings_i: 6,
      teacherfirstname_t: "Virginia"
    },
    {
      teacherlastname_t: "Philips",
      pk_id: 1256708,
      schoolid_s: "73",
      averageratingscore_rf: 2.58,
      total_number_of_ratings_i: 6,
      teacherfirstname_t: "James"
    },
    {
      teacherlastname_t: "McKenna",
      pk_id: 1511728,
      schoolid_s: "73",
      averageratingscore_rf: 3.58,
      total_number_of_ratings_i: 6,
      teacherfirstname_t: "Lawrence"
    },
    {
      teacherlastname_t: "Allen",
      pk_id: 1560894,
      schoolid_s: "73",
      averageratingscore_rf: 4.8,
      total_number_of_ratings_i: 6,
      teacherfirstname_t: "Meghan"
    },
    {
      teacherlastname_t: "Majbouri",
      pk_id: 1562000,
      schoolid_s: "73",
      averageratingscore_rf: 4.3,
      total_number_of_ratings_i: 6,
      teacherfirstname_t: "Mehdi"
    },
    {
      teacherlastname_t: "Way",
      pk_id: 1634276,
      schoolid_s: "73",
      averageratingscore_rf: 4.8,
      total_number_of_ratings_i: 6,
      teacherfirstname_t: "Megan"
    },
    {
      teacherlastname_t: "Gomes",
      pk_id: 1804294,
      schoolid_s: "73",
      averageratingscore_rf: 3.08,
      total_number_of_ratings_i: 6,
      teacherfirstname_t: "Paulo"
    },
    {
      teacherlastname_t: "MacLean",
      pk_id: 1805935,
      schoolid_s: "73",
      averageratingscore_rf: 1.58,
      total_number_of_ratings_i: 6,
      teacherfirstname_t: "Meghan"
    },
    {
      teacherlastname_t: "Blitz",
      pk_id: 1815974,
      schoolid_s: "73",
      averageratingscore_rf: 4.3,
      total_number_of_ratings_i: 6,
      teacherfirstname_t: "Amy"
    },
    {
      teacherlastname_t: "Bravo",
      pk_id: 2068580,
      schoolid_s: "73",
      averageratingscore_rf: 2.3,
      total_number_of_ratings_i: 6,
      teacherfirstname_t: "Sandy"
    },
    {
      teacherlastname_t: "Faigen",
      pk_id: 2142531,
      schoolid_s: "73",
      averageratingscore_rf: 2.75,
      total_number_of_ratings_i: 6,
      teacherfirstname_t: "Katherine"
    },
    {
      teacherlastname_t: "Sharpe",
      pk_id: 169826,
      schoolid_s: "73",
      averageratingscore_rf: 2.8,
      total_number_of_ratings_i: 5,
      teacherfirstname_t: "Noreen"
    },
    {
      teacherlastname_t: "Riley",
      pk_id: 181675,
      schoolid_s: "73",
      averageratingscore_rf: 4.8,
      total_number_of_ratings_i: 5,
      teacherfirstname_t: "Elizabeth"
    },
    {
      teacherlastname_t: "Rangan",
      pk_id: 442561,
      schoolid_s: "73",
      averageratingscore_rf: 3.4,
      total_number_of_ratings_i: 5,
      teacherfirstname_t: "Shrini"
    },
    {
      teacherlastname_t: "Rollag",
      pk_id: 533472,
      schoolid_s: "73",
      averageratingscore_rf: 4.3,
      total_number_of_ratings_i: 5,
      teacherfirstname_t: "Keith"
    },
    {
      teacherlastname_t: "Zhu",
      pk_id: 619453,
      schoolid_s: "73",
      averageratingscore_rf: 2.8,
      total_number_of_ratings_i: 5,
      teacherfirstname_t: "Zhen"
    },
    {
      teacherlastname_t: "Simons",
      pk_id: 643497,
      schoolid_s: "73",
      averageratingscore_rf: 3.8,
      total_number_of_ratings_i: 5,
      teacherfirstname_t: "Leeann"
    },
    {
      teacherlastname_t: "Weffer",
      pk_id: 731758,
      schoolid_s: "73",
      averageratingscore_rf: 4.8,
      total_number_of_ratings_i: 5,
      teacherfirstname_t: "Simon"
    },
    {
      teacherlastname_t: "James",
      pk_id: 1072042,
      schoolid_s: "73",
      averageratingscore_rf: 3.8,
      total_number_of_ratings_i: 5,
      teacherfirstname_t: "Robert"
    },
    {
      teacherlastname_t: "Morgan",
      pk_id: 1076689,
      schoolid_s: "73",
      averageratingscore_rf: 1.8,
      total_number_of_ratings_i: 5,
      teacherfirstname_t: "Ivor"
    },
    {
      teacherlastname_t: "Mozill",
      pk_id: 1118376,
      schoolid_s: "73",
      averageratingscore_rf: 4.8,
      total_number_of_ratings_i: 5,
      teacherfirstname_t: "Michael"
    },
    {
      teacherlastname_t: "Collins",
      pk_id: 1181744,
      schoolid_s: "73",
      averageratingscore_rf: 4.4,
      total_number_of_ratings_i: 5,
      teacherfirstname_t: "Morris"
    },
    {
      teacherlastname_t: "Abramoff",
      pk_id: 1192744,
      schoolid_s: "73",
      averageratingscore_rf: 3.9,
      total_number_of_ratings_i: 5,
      teacherfirstname_t: "Kimiko Ise"
    },
    {
      teacherlastname_t: "Jones",
      pk_id: 1475101,
      schoolid_s: "73",
      averageratingscore_rf: 3.8,
      total_number_of_ratings_i: 5,
      teacherfirstname_t: "Kent"
    },
    {
      teacherlastname_t: "Palson",
      pk_id: 1761683,
      schoolid_s: "73",
      averageratingscore_rf: 3.3,
      total_number_of_ratings_i: 5,
      teacherfirstname_t: "Eric"
    },
    {
      teacherlastname_t: "Wetter",
      pk_id: 2057310,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 5,
      teacherfirstname_t: "Jeffrey"
    },
    {
      teacherlastname_t: "Stillwagon",
      pk_id: 2306815,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 5,
      teacherfirstname_t: "Joshua"
    },
    {
      teacherlastname_t: "Engelkemeyer",
      pk_id: 442560,
      schoolid_s: "73",
      averageratingscore_rf: 1.0,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Susan"
    },
    {
      teacherlastname_t: "Alexander",
      pk_id: 645963,
      schoolid_s: "73",
      averageratingscore_rf: 4.63,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Mystica"
    },
    {
      teacherlastname_t: "Nanni",
      pk_id: 741542,
      schoolid_s: "73",
      averageratingscore_rf: 2.5,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Alfred"
    },
    {
      teacherlastname_t: "Hoopes",
      pk_id: 869141,
      schoolid_s: "73",
      averageratingscore_rf: 2.88,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "James"
    },
    {
      teacherlastname_t: "Pachamanova",
      pk_id: 1015712,
      schoolid_s: "73",
      averageratingscore_rf: 4.9,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Desislava"
    },
    {
      teacherlastname_t: "Kafi",
      pk_id: 1223382,
      schoolid_s: "73",
      averageratingscore_rf: 1.75,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Farhoud"
    },
    {
      teacherlastname_t: "Mukherjee",
      pk_id: 1358132,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Kankana"
    },
    {
      teacherlastname_t: "Rodgers",
      pk_id: 1492548,
      schoolid_s: "73",
      averageratingscore_rf: 4.8,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Vikki"
    },
    {
      teacherlastname_t: "Ross",
      pk_id: 1494155,
      schoolid_s: "73",
      averageratingscore_rf: 1.13,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Myron"
    },
    {
      teacherlastname_t: "Grossman",
      pk_id: 1540714,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Ted"
    },
    {
      teacherlastname_t: "Dinwoodey",
      pk_id: 1659400,
      schoolid_s: "73",
      averageratingscore_rf: 4.75,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "David"
    },
    {
      teacherlastname_t: "Bell",
      pk_id: 1666413,
      schoolid_s: "73",
      averageratingscore_rf: 4.13,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Janice"
    },
    {
      teacherlastname_t: "Bell",
      pk_id: 1816368,
      schoolid_s: "73",
      averageratingscore_rf: 4.5,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Michael"
    },
    {
      teacherlastname_t: "Licari",
      pk_id: 1817166,
      schoolid_s: "73",
      averageratingscore_rf: 4.8,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Phil"
    },
    {
      teacherlastname_t: "Fleischmann",
      pk_id: 1888104,
      schoolid_s: "73",
      averageratingscore_rf: 4.5,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Fritz"
    },
    {
      teacherlastname_t: "Lapoint",
      pk_id: 1888109,
      schoolid_s: "73",
      averageratingscore_rf: 4.4,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "William"
    },
    {
      teacherlastname_t: "Khachatryan",
      pk_id: 1929609,
      schoolid_s: "73",
      averageratingscore_rf: 3.75,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Davit"
    },
    {
      teacherlastname_t: "wilson",
      pk_id: 1929830,
      schoolid_s: "73",
      averageratingscore_rf: 4.75,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "peter"
    },
    {
      teacherlastname_t: "Balachandra",
      pk_id: 1988311,
      schoolid_s: "73",
      averageratingscore_rf: 3.88,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Lakshmi"
    },
    {
      teacherlastname_t: "Luippold",
      pk_id: 2015412,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Ben"
    },
    {
      teacherlastname_t: "Opie",
      pk_id: 2027729,
      schoolid_s: "73",
      averageratingscore_rf: 4.5,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Tina"
    },
    {
      teacherlastname_t: "Randolph",
      pk_id: 2142530,
      schoolid_s: "73",
      averageratingscore_rf: 3.5,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Angela"
    },
    {
      teacherlastname_t: "Hasanhodzic",
      pk_id: 2160464,
      schoolid_s: "73",
      averageratingscore_rf: 3.5,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Jasmina"
    },
    {
      teacherlastname_t: "Stavely-O'Carroll",
      pk_id: 2180986,
      schoolid_s: "73",
      averageratingscore_rf: 3.3,
      total_number_of_ratings_i: 4,
      teacherfirstname_t: "Josh"
    },
    {
      teacherlastname_t: "Anderson",
      pk_id: 133642,
      schoolid_s: "73",
      averageratingscore_rf: 4.5,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Marty"
    },
    {
      teacherlastname_t: "Kampen",
      pk_id: 417408,
      schoolid_s: "73",
      averageratingscore_rf: 3.5,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: ""
    },
    {
      teacherlastname_t: "Hennessey",
      pk_id: 585507,
      schoolid_s: "73",
      averageratingscore_rf: 1.33,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "David"
    },
    {
      teacherlastname_t: "Sedar",
      pk_id: 610883,
      schoolid_s: "73",
      averageratingscore_rf: 2.17,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Alice"
    },
    {
      teacherlastname_t: "Hebard",
      pk_id: 752212,
      schoolid_s: "73",
      averageratingscore_rf: 4.33,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "William"
    },
    {
      teacherlastname_t: "Glaas",
      pk_id: 778245,
      schoolid_s: "73",
      averageratingscore_rf: 3.33,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Eric"
    },
    {
      teacherlastname_t: "Lekse",
      pk_id: 799675,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "William"
    },
    {
      teacherlastname_t: "Beveridge",
      pk_id: 909846,
      schoolid_s: "73",
      averageratingscore_rf: 2.17,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "M"
    },
    {
      teacherlastname_t: "Cass",
      pk_id: 1072022,
      schoolid_s: "73",
      averageratingscore_rf: 1.83,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Linda"
    },
    {
      teacherlastname_t: "Ristuccia",
      pk_id: 1072037,
      schoolid_s: "73",
      averageratingscore_rf: 3.33,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "."
    },
    {
      teacherlastname_t: "Ertan",
      pk_id: 1138996,
      schoolid_s: "73",
      averageratingscore_rf: 2.83,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Arhan"
    },
    {
      teacherlastname_t: "Bowman",
      pk_id: 1190954,
      schoolid_s: "73",
      averageratingscore_rf: 3.0,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Richard"
    },
    {
      teacherlastname_t: "Allen",
      pk_id: 1274947,
      schoolid_s: "73",
      averageratingscore_rf: 4.67,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Elaine"
    },
    {
      teacherlastname_t: "May",
      pk_id: 1388739,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Michael J"
    },
    {
      teacherlastname_t: "Laprise",
      pk_id: 1438447,
      schoolid_s: "73",
      averageratingscore_rf: 3.83,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Shari"
    },
    {
      teacherlastname_t: "HU",
      pk_id: 1439907,
      schoolid_s: "73",
      averageratingscore_rf: 2.67,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Gang"
    },
    {
      teacherlastname_t: "Sands",
      pk_id: 1494154,
      schoolid_s: "73",
      averageratingscore_rf: 2.33,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Aimée"
    },
    {
      teacherlastname_t: "Hoffer",
      pk_id: 1614068,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Pamela"
    },
    {
      teacherlastname_t: "Moriarty",
      pk_id: 1659402,
      schoolid_s: "73",
      averageratingscore_rf: 2.5,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Phyllis"
    },
    {
      teacherlastname_t: "Harrity",
      pk_id: 1793930,
      schoolid_s: "73",
      averageratingscore_rf: 2.67,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Michael"
    },
    {
      teacherlastname_t: "Chavez",
      pk_id: 1794628,
      schoolid_s: "73",
      averageratingscore_rf: 3.1,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Gonzalo"
    },
    {
      teacherlastname_t: "Bumpus",
      pk_id: 1801945,
      schoolid_s: "73",
      averageratingscore_rf: 3.7,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Bruce"
    },
    {
      teacherlastname_t: "Bell",
      pk_id: 1807010,
      schoolid_s: "73",
      averageratingscore_rf: 2.83,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Timothy"
    },
    {
      teacherlastname_t: "Greenberg",
      pk_id: 1816545,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Danna"
    },
    {
      teacherlastname_t: "Herron",
      pk_id: 2056246,
      schoolid_s: "73",
      averageratingscore_rf: 4.5,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Richard"
    },
    {
      teacherlastname_t: "Gibson",
      pk_id: 2097956,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Kerry"
    },
    {
      teacherlastname_t: "Mouhib",
      pk_id: 2127456,
      schoolid_s: "73",
      averageratingscore_rf: 4.33,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Abdelkrim"
    },
    {
      teacherlastname_t: "Bryson",
      pk_id: 2150156,
      schoolid_s: "73",
      averageratingscore_rf: 3.3,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Elizabeth"
    },
    {
      teacherlastname_t: "Mohaghegh",
      pk_id: 2160476,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Jason"
    },
    {
      teacherlastname_t: "Vedula",
      pk_id: 2182409,
      schoolid_s: "73",
      averageratingscore_rf: 4.7,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Sid"
    },
    {
      teacherlastname_t: "Bero",
      pk_id: 2183458,
      schoolid_s: "73",
      averageratingscore_rf: 4.3,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Bret"
    },
    {
      teacherlastname_t: "Kokina",
      pk_id: 2217352,
      schoolid_s: "73",
      averageratingscore_rf: 4.7,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Julia"
    },
    {
      teacherlastname_t: "Ballou",
      pk_id: 2305257,
      schoolid_s: "73",
      averageratingscore_rf: 4.7,
      total_number_of_ratings_i: 3,
      teacherfirstname_t: "Abigail"
    },
    {
      teacherlastname_t: "Paul",
      pk_id: 417407,
      schoolid_s: "73",
      averageratingscore_rf: 3.5,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Donna"
    },
    {
      teacherlastname_t: "Truman",
      pk_id: 533473,
      schoolid_s: "73",
      averageratingscore_rf: 2.75,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Greg"
    },
    {
      teacherlastname_t: "Hussain",
      pk_id: 539661,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Ajaz"
    },
    {
      teacherlastname_t: "Laster",
      pk_id: 669999,
      schoolid_s: "73",
      averageratingscore_rf: 4.75,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Stephen"
    },
    {
      teacherlastname_t: "Habbershon",
      pk_id: 776224,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Tim"
    },
    {
      teacherlastname_t: "Van Bennekom",
      pk_id: 847555,
      schoolid_s: "73",
      averageratingscore_rf: 1.25,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Fred"
    },
    {
      teacherlastname_t: "Block",
      pk_id: 933064,
      schoolid_s: "73",
      averageratingscore_rf: 3.5,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Richard"
    },
    {
      teacherlastname_t: "Gordon",
      pk_id: 1048187,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Steven"
    },
    {
      teacherlastname_t: "Hamburger",
      pk_id: 1053079,
      schoolid_s: "73",
      averageratingscore_rf: 3.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: ""
    },
    {
      teacherlastname_t: "Roggeveen",
      pk_id: 1054476,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Anne"
    },
    {
      teacherlastname_t: "Michaud",
      pk_id: 1133371,
      schoolid_s: "73",
      averageratingscore_rf: 3.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Dennis"
    },
    {
      teacherlastname_t: "O'Brien",
      pk_id: 1272289,
      schoolid_s: "73",
      averageratingscore_rf: 3.75,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "William"
    },
    {
      teacherlastname_t: "Rivera",
      pk_id: 1317223,
      schoolid_s: "73",
      averageratingscore_rf: 4.25,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Miguel"
    },
    {
      teacherlastname_t: "Winslow",
      pk_id: 1350361,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Ann"
    },
    {
      teacherlastname_t: "De Castro",
      pk_id: 1438442,
      schoolid_s: "73",
      averageratingscore_rf: 3.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Julio"
    },
    {
      teacherlastname_t: "Lee-Jones",
      pk_id: 1493786,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Nancy"
    },
    {
      teacherlastname_t: "Manwaring",
      pk_id: 1532263,
      schoolid_s: "73",
      averageratingscore_rf: 4.5,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Melissa"
    },
    {
      teacherlastname_t: "Gallaugher",
      pk_id: 1550010,
      schoolid_s: "73",
      averageratingscore_rf: 3.5,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "John"
    },
    {
      teacherlastname_t: "Buckman",
      pk_id: 1560827,
      schoolid_s: "73",
      averageratingscore_rf: 4.75,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Kate"
    },
    {
      teacherlastname_t: "Li",
      pk_id: 1565508,
      schoolid_s: "73",
      averageratingscore_rf: 2.5,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Ji"
    },
    {
      teacherlastname_t: "Krcmar",
      pk_id: 1668845,
      schoolid_s: "73",
      averageratingscore_rf: 2.5,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Danielle"
    },
    {
      teacherlastname_t: "Metraux",
      pk_id: 1692446,
      schoolid_s: "73",
      averageratingscore_rf: 3.75,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Sandra"
    },
    {
      teacherlastname_t: "Bhardwaj",
      pk_id: 1698093,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Gaurab"
    },
    {
      teacherlastname_t: "O'Brien",
      pk_id: 1700064,
      schoolid_s: "73",
      averageratingscore_rf: 1.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "William"
    },
    {
      teacherlastname_t: "Woodside",
      pk_id: 1723889,
      schoolid_s: "73",
      averageratingscore_rf: 4.75,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Sarah"
    },
    {
      teacherlastname_t: "Richard",
      pk_id: 1753056,
      schoolid_s: "73",
      averageratingscore_rf: 3.5,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Constance"
    },
    {
      teacherlastname_t: "Mukherjee",
      pk_id: 1764228,
      schoolid_s: "73",
      averageratingscore_rf: 2.5,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Amit"
    },
    {
      teacherlastname_t: "Donnellon",
      pk_id: 1779387,
      schoolid_s: "73",
      averageratingscore_rf: 2.75,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Anne"
    },
    {
      teacherlastname_t: "Myers-Tierney",
      pk_id: 1816845,
      schoolid_s: "73",
      averageratingscore_rf: 2.5,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Linda"
    },
    {
      teacherlastname_t: "Feinstein",
      pk_id: 1845344,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Steven"
    },
    {
      teacherlastname_t: "Kangos",
      pk_id: 1946243,
      schoolid_s: "73",
      averageratingscore_rf: 2.25,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Doug"
    },
    {
      teacherlastname_t: "Hennessey",
      pk_id: 1997948,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Christopher"
    },
    {
      teacherlastname_t: "Vroman",
      pk_id: 2007518,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Susan "
    },
    {
      teacherlastname_t: "Yon",
      pk_id: 2007704,
      schoolid_s: "73",
      averageratingscore_rf: 4.5,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Charles"
    },
    {
      teacherlastname_t: "Baur",
      pk_id: 2058706,
      schoolid_s: "73",
      averageratingscore_rf: 3.5,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Steve"
    },
    {
      teacherlastname_t: "Tosti-Kharas",
      pk_id: 2140604,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Jennifer"
    },
    {
      teacherlastname_t: "Sinnott",
      pk_id: 2140842,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Sharon"
    },
    {
      teacherlastname_t: "Lopez",
      pk_id: 2157826,
      schoolid_s: "73",
      averageratingscore_rf: 1.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "David"
    },
    {
      teacherlastname_t: "Sims",
      pk_id: 2160470,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Jonathan"
    },
    {
      teacherlastname_t: "Briber",
      pk_id: 2186953,
      schoolid_s: "73",
      averageratingscore_rf: 1.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Brittain"
    },
    {
      teacherlastname_t: "Simon",
      pk_id: 2199581,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Jessica"
    },
    {
      teacherlastname_t: "Tsakas",
      pk_id: 2211293,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Spyridon"
    },
    {
      teacherlastname_t: "Smith",
      pk_id: 2217353,
      schoolid_s: "73",
      averageratingscore_rf: 3.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Michelle"
    },
    {
      teacherlastname_t: "Beitelspacher",
      pk_id: 2229079,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Lauren"
    },
    {
      teacherlastname_t: "Hunt",
      pk_id: 2242862,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Edward"
    },
    {
      teacherlastname_t: "Hill-Cummings",
      pk_id: 2259592,
      schoolid_s: "73",
      averageratingscore_rf: 4.5,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Krista"
    },
    {
      teacherlastname_t: "Murphy",
      pk_id: 2270465,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Wendy"
    },
    {
      teacherlastname_t: "De Zutter",
      pk_id: 2305111,
      schoolid_s: "73",
      averageratingscore_rf: 3.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Julie"
    },
    {
      teacherlastname_t: "Onyemah",
      pk_id: 2309750,
      schoolid_s: "73",
      averageratingscore_rf: 2.5,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Vincent"
    },
    {
      teacherlastname_t: "Mohsen",
      pk_id: 2357383,
      schoolid_s: "73",
      averageratingscore_rf: 3.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Marwa Gad"
    },
    {
      teacherlastname_t: "Young",
      pk_id: 2364288,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Elizabeth"
    },
    {
      teacherlastname_t: "Cooprider",
      pk_id: 2410411,
      schoolid_s: "73",
      averageratingscore_rf: 4.5,
      total_number_of_ratings_i: 2,
      teacherfirstname_t: "Kirstin"
    },
    {
      teacherlastname_t: "Greenfeld",
      pk_id: 682499,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Norton"
    },
    {
      teacherlastname_t: "Hinckley",
      pk_id: 850349,
      schoolid_s: "73",
      averageratingscore_rf: 3.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Mary"
    },
    {
      teacherlastname_t: "Sullivan",
      pk_id: 949188,
      schoolid_s: "73",
      averageratingscore_rf: 1.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Tom"
    },
    {
      teacherlastname_t: "Wasti",
      pk_id: 972963,
      schoolid_s: "73",
      averageratingscore_rf: 1.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Fred"
    },
    {
      teacherlastname_t: "Ansari",
      pk_id: 1048207,
      schoolid_s: "73",
      averageratingscore_rf: 3.5,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Shahid"
    },
    {
      teacherlastname_t: "Holt",
      pk_id: 1125732,
      schoolid_s: "73",
      averageratingscore_rf: 2.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Stephen"
    },
    {
      teacherlastname_t: "Kwan",
      pk_id: 1190779,
      schoolid_s: "73",
      averageratingscore_rf: 2.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Millie"
    },
    {
      teacherlastname_t: "Harris",
      pk_id: 1222971,
      schoolid_s: "73",
      averageratingscore_rf: 2.5,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Katherine"
    },
    {
      teacherlastname_t: "Ellis",
      pk_id: 1223392,
      schoolid_s: "73",
      averageratingscore_rf: 1.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Jeffrey"
    },
    {
      teacherlastname_t: "XU",
      pk_id: 1252329,
      schoolid_s: "73",
      averageratingscore_rf: 1.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Liu"
    },
    {
      teacherlastname_t: "Morrison",
      pk_id: 1292876,
      schoolid_s: "73",
      averageratingscore_rf: 2.5,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "James"
    },
    {
      teacherlastname_t: "Jimenez",
      pk_id: 1300427,
      schoolid_s: "73",
      averageratingscore_rf: 2.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Javier"
    },
    {
      teacherlastname_t: "Tillman",
      pk_id: 1349273,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Aaron"
    },
    {
      teacherlastname_t: "Kelley",
      pk_id: 1354192,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Glenn"
    },
    {
      teacherlastname_t: "Martin",
      pk_id: 1357600,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Sylvia"
    },
    {
      teacherlastname_t: "Guinan",
      pk_id: 1416930,
      schoolid_s: "73",
      averageratingscore_rf: 2.5,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Patricia"
    },
    {
      teacherlastname_t: "Marken",
      pk_id: 1479822,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Tim"
    },
    {
      teacherlastname_t: "Biran",
      pk_id: 1494153,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Dov"
    },
    {
      teacherlastname_t: "Brasel",
      pk_id: 1550012,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Stevan Adam"
    },
    {
      teacherlastname_t: "Musiol",
      pk_id: 1720656,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Hanna"
    },
    {
      teacherlastname_t: "Davis",
      pk_id: 1805897,
      schoolid_s: "73",
      averageratingscore_rf: 3.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "James"
    },
    {
      teacherlastname_t: "Hurley",
      pk_id: 1897776,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Blair"
    },
    {
      teacherlastname_t: "Ristuccia",
      pk_id: 1912302,
      schoolid_s: "73",
      averageratingscore_rf: 1.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Joel"
    },
    {
      teacherlastname_t: "Cleary ",
      pk_id: 1937654,
      schoolid_s: "73",
      averageratingscore_rf: 2.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Richard"
    },
    {
      teacherlastname_t: "Gale",
      pk_id: 1965206,
      schoolid_s: "73",
      averageratingscore_rf: 2.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Mary"
    },
    {
      teacherlastname_t: "Allen",
      pk_id: 2009079,
      schoolid_s: "73",
      averageratingscore_rf: 1.5,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Emily"
    },
    {
      teacherlastname_t: "Daniels",
      pk_id: 2016268,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Caroline"
    },
    {
      teacherlastname_t: "Goldstein",
      pk_id: 2025340,
      schoolid_s: "73",
      averageratingscore_rf: 1.5,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Elizabeth "
    },
    {
      teacherlastname_t: "Wain",
      pk_id: 2054778,
      schoolid_s: "73",
      averageratingscore_rf: 4.5,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Anthony"
    },
    {
      teacherlastname_t: "Mancha",
      pk_id: 2098098,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Ruben"
    },
    {
      teacherlastname_t: "Schwartz",
      pk_id: 2104237,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Adam"
    },
    {
      teacherlastname_t: "Blodgett",
      pk_id: 2142538,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "David"
    },
    {
      teacherlastname_t: "Constantino",
      pk_id: 2143107,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Raphael"
    },
    {
      teacherlastname_t: "Demma",
      pk_id: 2155971,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Ken"
    },
    {
      teacherlastname_t: "Gregory",
      pk_id: 2181856,
      schoolid_s: "73",
      averageratingscore_rf: 1.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Patrick"
    },
    {
      teacherlastname_t: "Musi",
      pk_id: 2182692,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Michael"
    },
    {
      teacherlastname_t: "Holmes",
      pk_id: 2184261,
      schoolid_s: "73",
      averageratingscore_rf: 1.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Elaine"
    },
    {
      teacherlastname_t: "Taillard",
      pk_id: 2197229,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Jerome"
    },
    {
      teacherlastname_t: "Hodge",
      pk_id: 2206902,
      schoolid_s: "73",
      averageratingscore_rf: 2.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "John"
    },
    {
      teacherlastname_t: "Erzurumlu",
      pk_id: 2213185,
      schoolid_s: "73",
      averageratingscore_rf: 1.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Yaman"
    },
    {
      teacherlastname_t: "Glover",
      pk_id: 2225779,
      schoolid_s: "73",
      averageratingscore_rf: 3.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Wiljeana"
    },
    {
      teacherlastname_t: "Taylor",
      pk_id: 2240741,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Scott"
    },
    {
      teacherlastname_t: "Ottley",
      pk_id: 2272706,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Gary"
    },
    {
      teacherlastname_t: "Miller",
      pk_id: 2293219,
      schoolid_s: "73",
      averageratingscore_rf: 1.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Heather"
    },
    {
      teacherlastname_t: "Sherlock",
      pk_id: 2296008,
      schoolid_s: "73",
      averageratingscore_rf: 1.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Madeline"
    },
    {
      teacherlastname_t: "Goverman",
      pk_id: 2305814,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Bradley"
    },
    {
      teacherlastname_t: "Stanley",
      pk_id: 2325195,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Samantha"
    },
    {
      teacherlastname_t: "Richter",
      pk_id: 2327684,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Norman"
    },
    {
      teacherlastname_t: "Barnor",
      pk_id: 2331696,
      schoolid_s: "73",
      averageratingscore_rf: 1.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Albert"
    },
    {
      teacherlastname_t: "Accardi",
      pk_id: 2341291,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Kenneth"
    },
    {
      teacherlastname_t: "Bayer",
      pk_id: 2344964,
      schoolid_s: "73",
      averageratingscore_rf: 2.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Michael"
    },
    {
      teacherlastname_t: "Hevert",
      pk_id: 2346648,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Katleen"
    },
    {
      teacherlastname_t: "Karam",
      pk_id: 2356653,
      schoolid_s: "73",
      averageratingscore_rf: 1.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Sana"
    },
    {
      teacherlastname_t: "Garbarino",
      pk_id: 2366398,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Leslie"
    },
    {
      teacherlastname_t: "Bliss",
      pk_id: 2376826,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Richard"
    },
    {
      teacherlastname_t: "DeZutter",
      pk_id: 2378139,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Julie"
    },
    {
      teacherlastname_t: "Tazi-Naim",
      pk_id: 2386143,
      schoolid_s: "73",
      averageratingscore_rf: 2.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Salma"
    },
    {
      teacherlastname_t: "Parise",
      pk_id: 2389438,
      schoolid_s: "73",
      averageratingscore_rf: 3.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Sal"
    },
    {
      teacherlastname_t: "Attachot",
      pk_id: 2399196,
      schoolid_s: "73",
      averageratingscore_rf: 2.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Weerapat"
    },
    {
      teacherlastname_t: "McCarthy",
      pk_id: 2414070,
      schoolid_s: "73",
      averageratingscore_rf: 4.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "John"
    },
    {
      teacherlastname_t: "Jimenez-Botta",
      pk_id: 2415568,
      schoolid_s: "73",
      averageratingscore_rf: 1.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Felix"
    },
    {
      teacherlastname_t: "Carey",
      pk_id: 2417305,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Joanna"
    },
    {
      teacherlastname_t: "Ratley",
      pk_id: 2430411,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Denicia"
    },
    {
      teacherlastname_t: "Abdelghany",
      pk_id: 2430713,
      schoolid_s: "73",
      averageratingscore_rf: 5.0,
      total_number_of_ratings_i: 1,
      teacherfirstname_t: "Louissa"
    },
    {
      teacherlastname_t: "Puca",
      pk_id: 1201270,
      schoolid_s: "73",
      averageratingscore_rf: 0.0,
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Andre"
    },
    {
      teacherlastname_t: "Cohen",
      pk_id: 1709129,
      schoolid_s: "73",
      averageratingscore_rf: 0.0,
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Allan"
    },
    {
      teacherlastname_t: "Matsuno",
      pk_id: 1723511,
      schoolid_s: "73",
      averageratingscore_rf: 0.0,
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Ken"
    },
    {
      teacherlastname_t: "Hoeppner",
      pk_id: 1786882,
      schoolid_s: "73",
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Suzanne"
    },
    {
      teacherlastname_t: "Weintraub",
      pk_id: 1821514,
      schoolid_s: "73",
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Joseph"
    },
    {
      teacherlastname_t: "Moore",
      pk_id: 1859491,
      schoolid_s: "73",
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Scott"
    },
    {
      teacherlastname_t: "Attia",
      pk_id: 1886418,
      schoolid_s: "73",
      averageratingscore_rf: 0.0,
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Joseph"
    },
    {
      teacherlastname_t: "Crittenden",
      pk_id: 1896620,
      schoolid_s: "73",
      averageratingscore_rf: 0.0,
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Victoria"
    },
    {
      teacherlastname_t: "Frodigh",
      pk_id: 1915629,
      schoolid_s: "73",
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Peter"
    },
    {
      teacherlastname_t: "Karst",
      pk_id: 1936139,
      schoolid_s: "73",
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Nathaniel"
    },
    {
      teacherlastname_t: "Stevenson",
      pk_id: 1981770,
      schoolid_s: "73",
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Joshua"
    },
    {
      teacherlastname_t: "Williams ",
      pk_id: 2033200,
      schoolid_s: "73",
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "David"
    },
    {
      teacherlastname_t: "Reeves",
      pk_id: 2087310,
      schoolid_s: "73",
      averageratingscore_rf: 0.0,
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Shawn "
    },
    {
      teacherlastname_t: "Dunay",
      pk_id: 2104859,
      schoolid_s: "73",
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Philip"
    },
    {
      teacherlastname_t: "Mulcahy",
      pk_id: 2136830,
      schoolid_s: "73",
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Diane"
    },
    {
      teacherlastname_t: "Tosti-Kharas",
      pk_id: 2141870,
      schoolid_s: "73",
      averageratingscore_rf: 0.0,
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Jennifer"
    },
    {
      teacherlastname_t: "Carr",
      pk_id: 2145657,
      schoolid_s: "73",
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Mark"
    },
    {
      teacherlastname_t: "Ceru",
      pk_id: 2155973,
      schoolid_s: "73",
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Dennis"
    },
    {
      teacherlastname_t: "Mackler",
      pk_id: 2238436,
      schoolid_s: "73",
      averageratingscore_rf: 0.0,
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Lauren"
    },
    {
      teacherlastname_t: "Sosnowski",
      pk_id: 2338978,
      schoolid_s: "73",
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Donna"
    },
    {
      teacherlastname_t: "Genovese",
      pk_id: 2366900,
      schoolid_s: "73",
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Michael"
    },
    {
      teacherlastname_t: "Kacaku",
      pk_id: 2412478,
      schoolid_s: "73",
      total_number_of_ratings_i: 0,
      teacherfirstname_t: "Floran"
    }
  ];

  var result = {
    profid: "",
    profrating: ""
  };
  //find prof
  rawdata.forEach(prof => {
    if (
      prof.teacherlastname_t == lastname &&
      prof.teacherfirstname_t == firstname
    ) {
      result.profid = prof.pk_id;
      result.profrating = prof.averageratingscore_rf;
    }
  });
  var baseurl = "http://www.ratemyprofessors.com/ShowRatings.jsp?tid=";
  if (result.profid) {
    var url = baseurl.concat(result.profid);
  }
  return url;
}
//send data
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.msg == "getprof") {
    sendResponse(findProf());
  }
});
