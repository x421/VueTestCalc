var app = new Vue({
    el: '#calculator',
    data: {
	  calculation: "",
	  result: 0,
	  numOne: 0,
	  numTwo: 0,
	  opType: '',
	  flag: false
    },
	methods: {
	  test: function(num) { 
		if(typeof num == "string")
		  this.opType = num
		this.calculation+=num 
	  },
	  clear: function() { 
		this.calculation = ""
		this.result= 0
		this.numOne= 0
		this.numTwo = 0
		this.opType =''
		this.flag = false
	  },
	  resultFunc: function() {
		var nums = this.calculation.split(this.opType)
		
		this.numOne = parseInt(nums[0])
		this.numTwo = parseInt(nums[1])
		  
		if(this.opType == '+'){
			this.calculation = this.numOne+this.numTwo
		}else if(this.opType == '-'){
			this.calculation = this.numOne-this.numTwo
		}else if(this.opType == '/'){
			this.calculation = this.numOne/this.numTwo
		}else if(this.opType == '*'){
			this.calculation = this.numOne*this.numTwo
		}

		this.numOne = parseInt(this.calculation)
		this.flag = false
	  }
	}
})