import classes from "./events-search.module.css"
import Button from "../UI/Button"
import { useRef } from "react";
const SearchEvents=(props)=>{
    const yearInput=useRef();
    const monthInput=useRef();
    const onsubmitHandler=(event)=>{
        event.preventDefault();
        const selectedYear=yearInput.current.value;
        const selectedMonth=monthInput.current.value;
        
        props.onSearch(selectedYear,selectedMonth);
    }
    return <form  onSubmit={onsubmitHandler} className={classes.form}>
        <div className={classes.control}>
            <div className={classes.control}>
                <label htmlFor="year">Year</label>
                <select ref={yearInput}  id="year">
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <div className={classes.control}>
                <label htmlFor="month">Month</label>
                <select ref={monthInput} id="year">
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">jun</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </div>
        </div>
        <Button>Find Events</Button>
    </form>
};
export default SearchEvents;