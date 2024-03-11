angular.module('myApp').factory('boardService', ['$http', function($http) {

  var dummyData = [
    {
      id: 1,
      title: '테스트 글1',
      content: '테스트내용1',
      memberId: "test1",
      category: '전체',
      writeDate: Date.now()
    },
    {
      id: 2,
      title: '테스트 글2',
      content: '테스트내용2',
      memberId: "test2",
      category: '전체',
      writeDate: Date.now()
    },
    {
      id: 3,
      title: '테스트 글3',
      content: '테스트내용3',
      memberId: "test3",
      category: '전체',
      writeDate: Date.now()
    },
    {
      id: 4,
      title: '테스트 글4',
      content: '테스트내용4',
      memberId: "test4",
      category: '전체',
      writeDate: Date.now()
    },
  ]


  var categoryItems = ['전체', '음악', '공부'];

  var boardFunc = {};

  boardFunc.getData = function(selectCategory) {
    if (selectCategory == '전체') {
      return dummyData;
    } else {
      return dummyData.filter(function(item) {
        return item.category === selectCategory;
      });;
    }

  }

  boardFunc.getCategory = function() {
    return categoryItems;
  }

  boardFunc.newContent = function(newTitle, newContent, newCategory, memberId) {


    var index = dummyData.length

    var newDummyData = {
      id: dummyData[index - 1].id + 1,
      title: newTitle,
      content: newContent,
      memberId: memberId,
      category: newCategory,
      writeDate: Date.now()
    }

    console.log(newDummyData)
    console.log(dummyData)
    dummyData.push(newDummyData)

    alert("게시글이 작성 되었습니다.")

  }


  boardFunc.getContent = function(id) {

    var findDummy = dummyData.find(x => x.id == id);
    return findDummy;


  }

  boardFunc.deleteContent = function(id) {
    var findDummy = dummyData.find(x => x.id == id);
    var index = dummyData.indexOf(findDummy);
    dummyData.splice(index, 1);
    alert("게시글이 삭제 되었습니다.")

  }



  return boardFunc; // 이 부분이 추가되었습니다.

}]);
