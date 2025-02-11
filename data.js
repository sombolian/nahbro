const items = [
  { "name": "הציפ", "value": 10000, "popularity": 0.5, "imageId": "16957810215", "hasGold": true, "goldImageId": "16957828379", "hasDiamond": true, "diamondImageId": "16957833890" },
  { "name": "חרוסת", "value": 20000, "popularity": 0.5, "imageId": "17130064669", "hasGold": true, "goldImageId": "17130399617", "hasDiamond": true, "diamondImageId": "17130470062" },
  { "name": "תפוח אדמה", "value": 20000, "popularity": 0.5, "imageId": "17609325059", "hasGold": true, "goldImageId": "17609341096", "hasDiamond": true, "diamondImageId": "17609331495" },
  { "name": "מרשמלו", "value": 20000, "popularity": 1.0, "imageId": "13375523108", "hasGold": true, "goldImageId": "14015304735", "hasDiamond": true, "diamondImageId": "14015305972" },
  { "name": "מרשמלו ורוד", "value": 20000, "popularity": 1.0, "imageId": "13375526290", "hasGold": true, "goldImageId": "14015306889", "hasDiamond": true, "diamondImageId": "14015307582" },
  { "name": "ארטיק אבטיח", "value": 30000, "popularity": 1.0, "imageId": "14535075934", "hasGold": true, "goldImageId": "14542586142", "hasDiamond": true, "diamondImageId": "14542593369" },
  { "name": "ארטיק תפוח", "value": 30000, "popularity": 1.0, "imageId": "14535073727", "hasGold": true, "goldImageId": "14542568774", "hasDiamond": true, "diamondImageId": "14542577713" },
  { "name": "ארטיק ענבים", "value": 30000, "popularity": 2.0, "imageId": "14535071878", "hasGold": true, "goldImageId": "14542614370", "hasDiamond": true, "diamondImageId": "14542602825" },
  { "name": "סביבון", "value": 35000, "popularity": 1.5, "imageId": "15170630869", "hasGold": true, "goldImageId": "15567925683", "hasDiamond": true, "diamondImageId": "15567940483" },
  { "name": "אקדח צעצוע", "value": 35000, "popularity": 1.0, "imageId": "26414968", "hasGold": true, "goldImageId": "14623220678", "hasDiamond": true, "diamondImageId": "14623228245" },
  { "name": "זיקוק", "value": 35000, "popularity": 1.0, "imageId": "17471360485", "hasGold": true, "goldImageId": "17471405115", "hasDiamond": true, "diamondImageId": "17471418875" },
  { "name": "חרב צעצוע", "value": 35000, "popularity": 0.5, "imageId": "409664953", "hasGold": true, "goldImageId": "14623269765", "hasDiamond": true, "diamondImageId": "14623275486" },
  { "name": "שופר", "value": 35000, "popularity": 1.0, "imageId": "14775692218", "hasGold": true, "goldImageId": "14775695456", "hasDiamond": true, "diamondImageId": "14775712096" },
  { "name": "מצה", "value": 40000, "popularity": 1.5, "imageId": "12838256464", "hasGold": true, "goldImageId": "14033509730", "hasDiamond": true, "diamondImageId": "14007433226" },
  { "name": "תפוח בדבש", "value": 40000, "popularity": 1.0, "imageId": "14750651472", "hasGold": true, "goldImageId": "14772927156", "hasDiamond": true, "diamondImageId": "14772957566" },
  { "name": "בקבוק", "value": 40000, "popularity": 0.5, "imageId": "14192395775", "hasGold": true, "goldImageId": "14192454313", "hasDiamond": true, "diamondImageId": "14192451964" },
  { "name": "מצלמה", "value": 40000, "popularity": 4.0, "imageId": "14191542521", "hasGold": true, "goldImageId": "14191703676", "hasDiamond": true, "diamondImageId": "14191840983" },
  { "name": "גבינה", "value": 40000, "popularity": 2.5, "imageId": "13476157687", "hasGold": true, "goldImageId": "14015325214", "hasDiamond": true, "diamondImageId": "14007532516" },
  { "name": "מקל דבש", "value": 50000, "popularity": 1.5, "imageId": "119777224116099", "hasGold": true, "goldImageId": "96388832980340", "hasDiamond": true, "diamondImageId": "78108140223918" },
  { "name": "אוזן המן", "value": 50000, "popularity": 2.0, "imageId": "12642685962", "hasGold": true, "goldImageId": "14007319991", "hasDiamond": true, "diamondImageId": "14007515231" },
  { "name": "מפתח כחול", "value": 50000, "popularity": 0.0, "imageId": "15230158127", "hasGold": false, "goldImageId": "", "hasDiamond": false, "diamondImageId": "" },
  { "name": "דגל ישראל", "value": 50000, "popularity": 4.5, "imageId": "13174969252", "hasGold": true, "goldImageId": "14007348748", "hasDiamond": true, "diamondImageId": "14007544134" },
  { "name": "בצל ירוק", "value": 50000, "popularity": 1.5, "imageId": "12837737144", "hasGold": true, "goldImageId": "14007331020", "hasDiamond": true, "diamondImageId": "14018231650" },
  { "name": "סוכריה על מקל", "value": 50000, "popularity": 2.0, "imageId": "16817682703", "hasGold": true, "goldImageId": "16817746707", "hasDiamond": true, "diamondImageId": "16817764644" },
  { "name": "חלב", "value": 50000, "popularity": 4.0, "imageId": "17819833782", "hasGold": true, "goldImageId": "17819917484", "hasDiamond": true, "diamondImageId": "17819929981" },
  { "name": "לפיד", "value": 50000, "popularity": 1.5, "imageId": "17609880385", "hasGold": true, "goldImageId": "17609885053", "hasDiamond": true, "diamondImageId": "17609894722" },
  { "name": "ארבעת המינים", "value": 60000, "popularity": 1.5, "imageId": "14872941012", "hasGold": true, "goldImageId": "14873045751", "hasDiamond": true, "diamondImageId": "14872990087" },
  { "name": "רעשן", "value": 70000, "popularity": 2.0, "imageId": "12636238194", "hasGold": true, "goldImageId": "14034787371", "hasDiamond": true, "diamondImageId": "14007510670" },
  { "name": "אף ליצן", "value": 70000, "popularity": 2.5, "imageId": "16817837900", "hasGold": true, "goldImageId": "16817612276", "hasDiamond": true, "diamondImageId": "16817618835" },
  { "name": "בועות סבון", "value": 80000, "popularity": 1.5, "imageId": "15505451020", "hasGold": true, "goldImageId": "15505756434", "hasDiamond": true, "diamondImageId": "15505757467" },
  { "name": "חרב גיימינג", "value": 80000, "popularity": 0.5, "imageId": "15820346775", "hasGold": true, "goldImageId": "15820361080", "hasDiamond": true, "diamondImageId": "15820362655" },
  { "name": "רגרובמה", "value": 180000, "popularity": 4.5, "imageId": "12956352976", "hasGold": true, "goldImageId": "14034762237", "hasDiamond": true, "diamondImageId": "14007461331" },
  { "name": "סוכה", "value": 90000, "popularity": 1.5, "imageId": "83628474365410", "hasGold": true, "goldImageId": "122935635273286", "hasDiamond": true, "diamondImageId": "111474772037905" },
  { "name": "בלון", "value": 100000, "popularity": 3.0, "imageId": "12642009544", "hasGold": true, "goldImageId": "14006762969", "hasDiamond": true, "diamondImageId": "14006769119" },
  { "name": "תות", "value": 100000, "popularity": 2.0, "imageId": "17339434448", "hasGold": true, "goldImageId": "17339448555", "hasDiamond": true, "diamondImageId": "17339464231" },
  { "name": "מטקה", "value": 100000, "popularity": 2.5, "imageId": "14142973311", "hasGold": true, "goldImageId": "14143053877", "hasDiamond": true, "diamondImageId": "14143105461" },
  { "name": "שמש", "value": 100000, "popularity": 1.5, "imageId": "18265153473", "hasGold": false, "goldImageId": "", "hasDiamond": false, "diamondImageId": "" },
  { "name": "שמשיה וכיסא חוף", "value": 100000, "popularity": 1.0, "imageId": "18280579071", "hasGold": false, "goldImageId": "", "hasDiamond": false, "diamondImageId": "" },
  { "name": "מטוס נייר", "value": 100000, "popularity": 1.0, "imageId": "16570553156", "hasGold": true, "goldImageId": "16570556655", "hasDiamond": true, "diamondImageId": "16570601120" },
  { "name": "בלון 2024", "value": 135000, "popularity": 0.5, "imageId": "15820165648", "hasGold": true, "goldImageId": "15820166632", "hasDiamond": true, "diamondImageId": "15820167788" },
  { "name": "פופקורן", "value": 140000, "popularity": 2.5, "imageId": "14435171291", "hasGold": true, "goldImageId": "14435667235", "hasDiamond": true, "diamondImageId": "14435678505" },
  { "name": "מקל פוגו", "value": 150000, "popularity": 0.5, "imageId": "16173228572", "hasGold": true, "goldImageId": "16173441032", "hasDiamond": true, "diamondImageId": "16173447294" },
  { "name": "פתית שלג", "value": 150000, "popularity": 1.0, "imageId": "17733737462", "hasGold": false, "goldImageId": "", "hasDiamond": false, "diamondImageId": "" },
  { "name": "משגר מזוייף", "value": 150000, "popularity": 3.0, "imageId": "17576714061", "hasGold": false, "goldImageId": "", "hasDiamond": false, "diamondImageId": "" },
  { "name": "משקולת", "value": 150000, "popularity": 0.5, "imageId": "16173229477", "hasGold": true, "goldImageId": "16173508093", "hasDiamond": true, "diamondImageId": "16173501055" },
  { "name": "פאי", "value": 170000, "popularity": 3.5, "imageId": "18425037", "hasGold": true, "goldImageId": "14127951921", "hasDiamond": true, "diamondImageId": "14127943913" },
  { "name": "טלפורטר", "value": 200000, "popularity": 2.0, "imageId": "15505812207", "hasGold": true, "goldImageId": "15505859447", "hasDiamond": true, "diamondImageId": "15505837242" },
  { "name": "ספריי שלג", "value": 200000, "popularity": 4.0, "imageId": "12929875333", "hasGold": true, "goldImageId": "14007444025", "hasDiamond": true, "diamondImageId": "14007445072" },
  { "name": "אבקת חשמל", "value": 250000, "popularity": 3.0, "imageId": "95639010075721", "hasGold": false, "goldImageId": "", "hasDiamond": false, "diamondImageId": "" },
  { "name": "כפפות אגרוף", "value": 250000, "popularity": 1.5, "imageId": "96229494394377", "hasGold": true, "goldImageId": "139820438481198", "hasDiamond": true, "diamondImageId": "73411562690004" },
  { "name": "מגנט", "value": 350000, "popularity": 5.0, "imageId": "15160349190", "hasGold": true, "goldImageId": "15238033150", "hasDiamond": true, "diamondImageId": "15238044664" },
  { "name": "קערה", "value": 1100000, "popularity": 3.0, "imageId": "15118690994", "hasGold": true, "goldImageId": "15118700307", "hasDiamond": true, "diamondImageId": "15118697327" },
  { "name": "מוח", "value": 1300000, "popularity": 2.5, "imageId": "15118747528", "hasGold": true, "goldImageId": "15118750044", "hasDiamond": true, "diamondImageId": "15118752284" },
  { "name": "רימון", "value": 5000000, "popularity": 3.5, "imageId": "14007483928", "hasGold": true, "goldImageId": "14007481646", "hasDiamond": true, "diamondImageId": "14034785722" },
  { "name": "מסיכה", "value": 10500000, "popularity": 5.0, "imageId": "15229925171", "hasGold": false, "goldImageId": "", "hasDiamond": false, "diamondImageId": "" },
  { "name": "חנוכיה", "value": 15000000, "popularity": 4.0, "imageId": "14027850119", "hasGold": true, "goldImageId": "14775892384", "hasDiamond": true, "diamondImageId": "14775928667" },
  { "name": "חץ קרח", "value": 20000000, "popularity": 3.5, "imageId": "13958890858", "hasGold": true, "goldImageId": "14027634688", "hasDiamond": false, "diamondImageId": "" },
  { "name": "פיצוץ אדמה", "value": 30000000, "popularity": 2.0, "imageId": "13959268038", "hasGold": false, "goldImageId": "", "hasDiamond": false, "diamondImageId": "" },
  { "name": "כדור אש", "value": 35000000, "popularity": 4.0, "imageId": "13958752744", "hasGold": true, "goldImageId": "14027633719", "hasDiamond": false, "diamondImageId": "" },
  { "name": "דלעת", "value": 60000000, "popularity": 5.0, "imageId": "14007368728", "hasGold": true, "goldImageId": "14027852872", "hasDiamond": true, "diamondImageId": "14027853853" },
  { "name": "משגר כסף", "value": 100000, "popularity": 4.5, "imageId": "13986986705", "hasGold": true, "goldImageId": "14048885905", "hasDiamond": true, "diamondImageId": "14048896961" }
];
