let куб = {
  измерения: ["а", "б", "в"],

  данные: [
    //а1
    [
      //  б1
      [1, 2, 3], // все элементы "в"
      // б2
      [4, 5, 6], // все элементы "в"
      //  б3
      [7, 8, 9], // все элементы "в"
    ],
    //а2
    [
      //  б1
      [10, 11, 12], // все элементы "в"
      // б2
      [13, 14, 15], // все элементы "в"
      //  б3
      [16, 17, 18], // все элементы "в"
    ],
  ],

  // Получает массив с числом элементов в каждом измерении куба.
  //, например [2, 2, 3] означает что в кубе три измерения. В первом и втором измерении по 2 элемента, в третьем - 3
  создатьМодельДанныхПоМассиву: function (массивСИзмерениями) {
    if (массивСИзмерениями.length > 0) {
      let числоЭлементовВИзмерении = массивСИзмерениями[0];
      let остальныеИзмерения = массивСИзмерениями.slice(1);
      let новыйМассив = new Array();
      for (let i = 0; i < числоЭлементовВИзмерении; i++) {
        новыйМассив[i] = this.создатьМодельДанныхПоМассиву(остальныеИзмерения);
      }
      return новыйМассив;
    } else {
      return null;
    }
  },
};
// возвращает "6". Так мы обращаемся к значению в кубе
куб.данные[0][1][2];

куб.создатьМодельДанныхПоМассиву([2, 3, 3]);



