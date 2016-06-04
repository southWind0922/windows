$(function() {
	var oMark = new Array; //0代表安全 1代表地雷
	var oMine = []; //抽取地雷
	var oMineTemp = []; //暂存地雷抽取池
	var oCalculate = new Array; //计数数组
	var oNum = 0; //计数
	var oRemove = []; //消除的所有0
	var oClicked = []; //0代表未点击 1代表消除
	var tempvic=0; //未走步数
	//画地图
	function readymap() {
		for (var i = 0; i < 81; i++) {
			oClicked[i] = 0;
		}
		for (var i = -1; i < 10; i++) {
			oMark[i] = new Array;
			for (var j = -1; j < 10; j++) {
				oMark[i][j] = 0;
			}
		}
		for (var i = 0; i < 9; i++) {
			for (var j = 0; j < 9; j++) {
				$('.bodycontainer').append('<figure><p></p><img class="flag"  src="img/flag.png"/></img></figure>');
			}
		}
		for (var i = 0; i < 81; i++) {
			oMineTemp[i] = i;
		}
		oMine = getArrayItems(oMineTemp, 10);
		for (var n = 0; n < 10; n++) {
			var a = oMine[n];
			var s = a % 9;
			var t = (a - s) / 9;
			oMark[t][s] = 1
			$('.bodycontainer figure').eq(a).append('<img class="mine"  src="img/mine.png"/></img>');
		}
		calculate(oMark);
	    menu();
	}

	//随机抽取地雷
	function getArrayItems(arr, num) {
		//新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
		var temp_array = new Array();
		for (var index in arr) {
			temp_array.push(arr[index]);
		}
		//取出的数值项,保存在此数组
		var return_array = new Array();
		for (var i = 0; i < num; i++) {
			//判断如果数组还有可以取出的元素,以防下标越界
			if (temp_array.length > 0) {
				//在数组中产生一个随机索引
				var arrIndex = Math.floor(Math.random() * temp_array.length);
				//将此随机索引的对应的数组元素值复制出来
				return_array[i] = temp_array[arrIndex];
				//然后删掉此索引的数组元素,这时候temp_array变为新的数组
				temp_array.splice(arrIndex, 1);
			} else {
				//数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
				break;
			}
		}
		return return_array;
	}

	//计算周围雷数
	function calculate(arr) {
		for (var i = -1; i < 10; i++) {
			oCalculate[i] = new Array;
			for (var j = -1; j < 10; j++) {
				oCalculate[i][j] = 999;
			}
		}
		for (var i = 0; i < 9; i++) {
			oCalculate[i] = new Array;
			for (var j = 0; j < 9; j++) {
				oCalculate[i][j] = 0;
			}
		}
		for (var i = 0; i < 9; i++) {
			for (var j = 0; j < 9; j++) {
				if (arr[i - 1][j - 1] == 1) {
					oNum++
				}
				if (arr[i - 1][j] == 1) {
					oNum++
				}
				if (arr[i - 1][j + 1] == 1) {
					oNum++
				}
				if (arr[i][j - 1] == 1) {
					oNum++
				}
				if (arr[i][j + 1] == 1) {
					oNum++
				}
				if (arr[i + 1][j - 1] == 1) {
					oNum++
				}
				if (arr[i + 1][j] == 1) {
					oNum++
				}
				if (arr[i + 1][j + 1] == 1) {
					oNum++
				}
				var Numfig = i * 9 + j;
				if (oNum != 0) {
					$('.bodycontainer figure p').eq(Numfig).append(oNum);
					if (oNum == 1) {
						$('.bodycontainer figure').eq(Numfig).css({
							'color': 'blue'
						})
					}
					if (oNum == 2) {
						$('.bodycontainer figure').eq(Numfig).css({
							'color': 'green'
						})
					}
					if (oNum == 3) {
						$('.bodycontainer figure').eq(Numfig).css({
							'color': 'red'
						})
					}
				}
				oCalculate[i][j] = oNum;
				oNum = 0;
			}

		}
	}


    //消除
	function remove(index) {
		var s = index % 9;
		var t = (index - s) / 9;
		var tempcal = oCalculate;
		if (tempcal[t][s] != 0) {
			oClicked[index] = 1;
			$('.bodycontainer figure').eq(index).css({
				'background-image': 'url(../winmine/img/Selected.png)'
			})
			$('.bodycontainer figure').eq(index).children('p').css({
				'display': 'block'
			})
		} else {

			if (tempcal[t][s] == 0 && oClicked[index] == 0) {
				oRemove.push(index);
				oClicked[index] = 1;
				remove(index)
			}
			if (tempcal[t - 1][s] == 0 && oClicked[index - 9] == 0) {
				oRemove.push(index - 9);
				oClicked[index - 9] = 1;
				remove(index - 9)
			}
			if (tempcal[t + 1][s] == 0 && oClicked[index + 9] == 0) {
				oRemove.push(index + 9);
				oClicked[index + 9] = 1;
				remove(index + 9)
			}
			if (tempcal[t][s - 1] == 0 && oClicked[index - 1] == 0) {
				oRemove.push(index - 1);
				oClicked[index - 1] = 1;
				remove(index - 1)
			}
			if (tempcal[t][s + 1] == 0 && oClicked[index + 1] == 0) {
				oRemove.push(index + 1);
				oClicked[index + 1] = 1;
				remove(index + 1)
			}
			for (var i = 0; i < 1; i++) {
				if (oClicked[index - 9] == 0) {
					oRemove.push(index - 9);
					oClicked[index - 9] = 1;
					if (tempcal[t - 1][s] == 0) {
						remove(index - 9)
					}
				}
				if (oClicked[index + 9] == 0) {
					oRemove.push(index + 9);
					oClicked[index + 9] = 1;
					if (tempcal[t + 1][s] == 0) {
						remove(index + 9)
					}
				}
				if (oClicked[index - 1] == 0 && index % 9 != 0) {
					oRemove.push(index - 1);
					oClicked[index - 1] = 1;
					if (tempcal[t][s - 1] == 0) {
						remove(index - 1)
					}
				}
				if (oClicked[index + 1] == 0 && (index + 1) % 9 != 0) {
					oRemove.push(index + 1);
					oClicked[index + 1] = 1;
					if (tempcal[t][s + 1] == 0) {
						remove(index + 1)
					}
				}
				if (oClicked[index - 10] == 0 && index % 9 != 0) {
					oRemove.push(index - 10);
					oClicked[index - 10] = 1;
					if (tempcal[t - 1][s - 1] == 0) {
						remove(index - 10)
					}
				}
				if (oClicked[index - 8] == 0 && (index + 1) % 9 != 0) {
					oRemove.push(index - 8);
					oClicked[index - 8] = 1;
					if (tempcal[t - 1][s + 1] == 0) {
						remove(index - 8)
					}
				}
				if (oClicked[index + 10] == 0 && (index + 1) % 9 != 0) {
					oRemove.push(index + 10);
					oClicked[index + 10] = 1;
					if (tempcal[t + 1][s + 1] == 0) {
						remove(index + 10)
					}
				}
				if (oClicked[index + 8] == 0 && index % 9 != 0) {
					oRemove.push(index + 8);
					oClicked[index + 8] = 1;
					if (tempcal[t + 1][s - 1] == 0) {
						remove(index + 8)
					}
				}
			}
			for (var i = 0; i < oRemove.length; i++) {
				$('.bodycontainer figure').eq(oRemove[i]).css({
					'background-image': 'url(../winmine/img/Selected.png)'
				})
				$('.bodycontainer figure').eq(oRemove[i]).children('p').css({
					'display': 'block'
				})
			}
		}
	}
	
	function flag(){
	$(document).bind("contextmenu",function(e){
        return false;
    });
	$('.bodycontainer figure').mousedown(function(e){
          if(3 == e.which){
          	
            $(this).children('.flag').toggle()
          }
    })
	}
	
	//菜单栏
	function menu() {
		$('#reset').click(function() {
			gamereset()
		})
	}


    //游戏重置
	function gamereset() {
		$('.bodycontainer').empty();
		oMark = new Array; //0代表安全 1代表地雷
		oMine = []; //抽取地雷
		oMineTemp = []; //暂存地雷抽取池
		oCalculate = new Array; //计数数组
		oNum = 0; //计数
		oRemove = []; //消除的所有0
		oClicked = []; //0代表未点击 1代表消除
		readymap();
		gogame();
		flag()
	}

	//开始游戏
	function gogame() {
		$('.bodycontainer figure').click(function() {
			//			$(this).css({
			//				'background-image': 'url(../winmine/img/Selected.png)'
			//			})
			var figindex = $(this).index();
			var oIfmine = $(this).children('img').length;
			
			if (oIfmine == 2) {
				$('.bodycontainer figure').children('.mine').css({
					'display': 'block'
				})
				alert('游戏结束')
				gamereset();
				return false;
			}
			remove(figindex);
			for(var i=0;i<81;i++){
				if(oClicked[i]==1){tempvic++}
			}
			if(tempvic==71){alert('恭喜过关');gamereset();}
			oRemove = [];
			tempvic=0;

		})
	}

	readymap();
	gogame();
	flag();
})