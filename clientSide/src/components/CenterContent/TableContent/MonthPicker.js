import React, { Component } from 'react';
import Picker from 'react-month-picker';


class MonthPicker extends Component{

    constructor(props){
        super(props);

        this.state = {
            singleValue: {year: 2014, month: 11},
            years :[]
        }
 
        this.pickAMonth = React.createRef();

    }

    componentDidMount(){
        this.setState({
            years: [2008, 2011, 2012, 2014, 2016, 2018, 2020]
        })
    }


    render(){

        const pickerLang = {
            months: ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'shtator', 'Tetor', 'Nentor', 'Dhjetor']
        };

        const singleValue = this.state.singleValue;
        const yearsArray = this.state.years;

        const makeText = m => {
            if (m && m.year && m.month) return (pickerLang.months[m.month-1] + '. ' + m.year)
            return '?'
        }

        return(
            <div>
                <ul>
                    <li>
                        <label><b>Pick A Month</b></label>
                        <div className="edit">
                            <Picker
                                ref={this.pickAMonth}
                                years={ [2008, 2011, 2012, 2014, 2016, 2018, 2020] }
                                value={singleValue}
                                lang={pickerLang.months}
                                onChange={this.handleAMonthChange}
                                onDismiss={this.handleAMonthDissmis}
                            >
                                <div onClick={this.handleClickMonthBox} > 
                                    {makeText(singleValue)} 
                                </div>
                            </Picker>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }

}
export default MonthPicker;






