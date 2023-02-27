import React, { useState } from "react";
import {Link} from 'react-router-dom';


// 셀렉트 국가
function SelectWorld(props){
    const worldList = [];
    for(let i = 0; i< props.world.length; i++){
        worldList.push(<option value={props.world[i]}>
            {props.world[i]}
        </option>)
    }
    return<select className="selectbox" onChange={event =>{
        props.onChangeWorld(event.target.value);
    }}>
        {worldList}
</select>
}

// 셀렉트 팝업 국가
function PopSelectWorld(props){
    const worldList = [];
    for(let i = 0; i< props.world.length; i++){
        worldList.push(<option value={props.world[i]}>
            {props.world[i]}
        </option>)
    }
    return<select className="popworld" onChange={event =>{
        props.onChangeWorld(event.target.value);
    }}>
        {worldList}
</select>
}

// 셀렉트 도시
function SelectCity(props){
    const CityList = [];
    for(let i = 0; i< props.citys.length; i++){
             CityList.push(<option value={props.citys[i].city}>
                {props.citys[i].city}
             </option>)
    }
    
    return<select className="selectbox" onChange={event =>{
        props.onChangeCity(event.target.value )
    }}><option value='City'>City</option>
        {CityList}
    </select>
}

// 셀렉트 팝업 도시
function PopSelectCity(props){
    const CityList = [];
    for(let i = 0; i< props.citys.length; i++){
             CityList.push(<option value={props.citys[i].city}>
                {props.citys[i].city}
             </option>)
    }
    
    return<select className="popworld" onChange={event =>{
        props.onChangeCity(event.target.value )
    }}><option value='City'>City</option>
        {CityList}
    </select>
}

// 테이블 - 완료
function MissionTaBle(props){
    const tableList = [];
    for(let i = 0; i< props.missionTable.length; i++){
        let table = props.missionTable[i];
        if( table.page === props.page){
            if(table.checked){
                tableList.push(<tr className="table-size"><td className="td1"><input type="checkbox" checked value={table.num} onClick={event=>{
                    props.onCheck(table.checked ,event.target.value);
                }}/></td>
                <td className="td2" onClick={()=>{
                    alert(1)
                }}>{table.id}</td>
                <td className="td2">{table.name}</td>
                <td className="td3">{table.gender}</td>
                <td className="td2">{table.world}</td>
                <td className="td2">{table.city}</td>
                </tr>)
            }else{

                tableList.push(<tr className="table-size"><td className="td1"><input type="checkbox"  value={table.num} onClick={event=>{
                    props.onCheck(table.checked ,event.target.value);
                }}/></td>
            <td className="td2" onClick={()=>{
                props.show(table.num, table.id, table.name, table.gender, table.world, table.city);
            }}>{table.id}</td>
            <td className="td2">{table.name}</td>
            <td className="td3">{table.gender}</td>
            <td className="td2">{table.world}</td>
            <td className="td2">{table.city}</td>
            </tr>)
            }
        }
    }
    return<tbody>
        {tableList}
    </tbody>
}

// 페이징 - 완료
function Page(props){
    const pageList = [];
    const page = Math.floor((props.length-1)/5);
    for(let i = 0; i<= page; i++){
        pageList.push(<a id={i} href={"/"+(i+1)} className="page" onClick={event =>{
            event.preventDefault();
            props.onChangePage(Number(event.target.id));
        }}>{i+1}</a>)
    }
    return<div> 
        <a href="/" className="pageFirst" onClick={event =>{
            event.preventDefault();
            if( 0 < props.nowpage){
                props.onChangePage(Number(props.nowpage-1));
            }else{
                props.onChangePage(Number(props.nowpage));
            }
        }}>&lt;</a>
        {pageList}
        <a href="/" className="page" onClick={event =>{
            event.preventDefault();
            if( page > props.nowpage){
                props.onChangePage(Number(props.nowpage+1));
            }else{
                props.onChangePage(Number(props.nowpage));
            }
        }}>&gt;</a>
    </div>
}

// 추가버튼
function Add(props){
    const addList = [];
    for(let i =0; i< props.add; i++){
        addList.push(<tr className="table-size"><td><input type="checkbox"/></td>
        <td><input className="inputBox" type='text' onChange={event =>{
                let newInputBox = [...props.inputBox];
                newInputBox[i] = event.target.value;
                props.addCityPick(newInputBox[i],props.inputBox2[i],props.radiobtn[i],props.addWorld[i],props.addCity[i], i);
        }}/></td>
        <td><input className="inputBox" type='text' onChange={event =>{
                let newInputBox2 = [...props.inputBox2];
                newInputBox2[i] = event.target.value;
                props.addCityPick(props.inputBox[i],newInputBox2[i],props.radiobtn[i],props.addWorld[i],props.addCity[i], i);
        }}/></td>
        <td><span><input type='radio' name={"gender"+i} id={"man"+i} value="Man" onClick={event =>{
                let newRadio = [...props.radiobtn];
                newRadio[i] = event.target.value;
                props.addCityPick(props.inputBox[i],props.inputBox2[i],newRadio[i],props.addWorld[i],props.addCity[i], i);
        }}/><label for={"man"+i}>Man</label>
            <input type='radio' name={"gender"+i} id={"woman"+i} value="Woman" onClick={event =>{
                let newRadio = [...props.radiobtn];
                newRadio[i] = event.target.value;
                props.addCityPick(props.inputBox[i],props.inputBox2[i],newRadio[i],props.addWorld[i],props.addCity[i], i);
        }}/><label for={"woman"+i}>Woman</label></span></td>
        <td><AddWorld world={props.world} onChangeWorld={(world) =>{
                let newWorld = [...props.addWorld];
                newWorld[i] = world;
                props.addCityPick(props.inputBox[i],props.inputBox2[i],props.radiobtn[i],newWorld[i],props.addCity[i], i);
        }}/></td>
        <td><AddCity citys={props.citys} world={props.addWorld[i]} onChangeCity={(city) =>{
                let newCity = [...props.addCity];
                newCity[i] = city;
                props.addCityPick(props.inputBox[i],props.inputBox2[i],props.radiobtn[i],props.addWorld[i],newCity[i], i);
        }}/></td>
    </tr>)
    }
    return<tbody>
        {addList}
</tbody>
}

// 추가 ROW 국가 - 완료
function AddWorld(props){
    const addWorld = [];
    for(let i= 0; i< props.world.length; i++){
        addWorld.push(<option value={props.world[i]}>
            {props.world[i]}
        </option>)
    }
    return<select className="inputBox" onChange={event =>{
        props.onChangeWorld(event.target.value);
    }}>
        {addWorld}
    </select>
}

// 추가 ROW 도시 - 완료
function AddCity(props){
    const addCity = [];
    for(let i = 0; i< props.citys.length; i++){
        let t = props.citys[i];
            if(t.world === props.world){
                addCity.push(<option value={t.city}>
                {t.city}
             </option>)
            }
    }
    return<select className="inputBox" onChange={event =>{
        props.onChangeCity(event.target.value )
    }}><option>City</option>
        {addCity}
</select>
}

// 팝업창 - 완료
function Popup(props){
    const world = ['World','Korea','USA','Japan','China'];
    const [newCitys, setNewCitys] = useState([]);
    const [popGender,setPopGender] = useState('');
    const [popworld, setpopworld] = useState('World'); 
    const [popcity, setpopcity] = useState('City'); 
    if(props.popupShow){
        return<div class="black-bg">
        <div class="white-bg">   
            <h2>Grid 수정</h2>
            <div class="popup-update">
                <span><button type="button" class="link" onClick={()=>{
                    props.link();
                }}>Link</button></span><br/>
                <input className="title" type="text" value="Id" readonly/>
                <input className="poptb" type="text" value={props.table.id} readonly/><br/>
                <input className="title" type="text" value="Name" readonly/>
                <input className="poptb" type="text" value={props.name} onChange={event =>{
                    props.changeName(event.target.value);
                }}/><br/>
                <input className="title" type="text" value="Gender" readonly/>
                <span> 
                    <input type="radio" className="popradio" name="pop-gender" id="pop-man" value="Man" onClick={event =>{
                        setPopGender(event.target.value);
                    }}/><label className="label" for="pop-man">Man</label>
                    <input type="radio" className="popradio" name="pop-gender" id="pop-woman" value="Woman" onClick={event =>{
                        setPopGender(event.target.value);
                    }}/><label className="label" for="pop-woman">Woman</label>
                </span><br/>
                <input className="title" type="text" value="World" readonly/>
                <PopSelectWorld world={world} onChangeWorld={(world)=>{
                    setpopworld(world);
                    setpopcity('City')
                    let updateCitys = [...props.citys];
                    updateCitys = props.citys.filter(city => city.world === world);
                    
                    setNewCitys(updateCitys);
                }}/>
                <input className="title" type="text" value="City" readonly/>
                <PopSelectCity citys={newCitys} world={popworld} onChangeCity={city =>{
                    setpopcity(city)
                }}/>
                <div className="btns">
                <button type="button" className="btn" onClick={()=>{
                    props.exit();
                }}>cancel</button>
                <button type="button" className="btn" onClick={()=>{                    
                    if(popGender === '' || popworld === 'World' || popcity === 'City'){
                        alert("Please enter all information.")
                    }else{
                        props.changeTB(props.table.num, props.name, popGender, popworld, popcity);
                    }
                }}>Confirm</button>
                </div>
            </div>
        </div>
    </div>
    }
}
const HomeEn = () =>{
    const [id,setId] = useState('');
    const [name,setName] = useState('');
    const [gender,setGender] = useState('');
    const [startDate,setStartDate] = useState('');
    const [endDate,setEndDate] = useState('');
    const world = ['World','Korea','USA','Japan','China'];
    const [pickworld,setPickworld] = useState('World');
    const [pickcity,setPickcity] = useState('City');
    const [page,setPage] = useState(0);
    const [add,setAdd] = useState(0);
    const [num,setNum] = useState(11);
    const [popupShow,setPopupShow] = useState(false);
    const citys = [
        { world: 'Korea', city: 'Seoul'},
        { world: 'Korea', city: 'Suwon'},
        { world: 'Korea', city: 'Daejeon'},
        { world: 'Korea', city: 'Busan'},
        { world: 'USA', city: 'Washington'},
        { world: 'USA', city: 'NewYork'},
        { world: 'USA', city: 'LasVegas'},
        { world: 'Japan', city: 'Tokyo'},
        { world: 'Japan', city: 'Osaka'},
        { world: 'Japan', city: 'Fukuoka'},
        { world: 'China', city: 'Beijing'},
        { world: 'China', city: 'Shanghai'},
        { world: 'China', city: 'Harbin'},
    ];
    const [missionTables, setMissionTables] = useState([
        {num: 0, id:'hong', name:'Gildong', gender: 'Man', world: 'Korea', city: 'Seoul', checked: false, date: '2023-01-10', page: 0},
        {num: 1, id:'gang', name:'cheolsu', gender: 'Man', world: 'USA', city: 'NewYork', checked: false, date: '2023-01-12', page: 0},
        {num: 2, id:'kim', name:'Younghee', gender: 'Woman', world: 'Korea', city: 'Suwon', checked: false, date: '2023-01-11', page: 0},
        {num: 3, id:'park', name:'Gildong', gender: 'Man', world: 'China', city: 'Beijing', checked: false, date: '2023-01-10', page: 0},
        {num: 4, id:'lee', name:'Gilsook', gender: 'Woman', world: 'Japan', city: 'Tokyo', checked: false, date: '2023-01-09', page: 0},
        {num: 5, id:'choi', name:'cheolsu', gender: 'Man', world: 'Korea', city: 'Busan', checked: false, date: '2023-01-13', page: 1},
        {num: 6, id:'ga', name:'Gildong', gender: 'Man', world: 'Japan', city: 'Osaka', checked: false, date: '2023-01-11', page: 1},
        {num: 7, id:'na', name:'Younghee', gender: 'Woman', world: 'China', city: 'Shanghai', checked: false, date: '2023-01-16', page: 1},
        {num: 8, id:'da', name:'cheolsu', gender: 'Man', world: 'Korea', city: 'Daejeon', checked: false, date: '2023-01-15', page: 1},
        {num: 9, id:'ra', name:'Gilsook', gender: 'Woman', world: 'USA', city: 'LasVegas', checked: false, date: '2023-01-14', page: 1},
        {num: 10, id:'ma', name:'Gildong', gender: 'Man', world: 'Korea', city: 'Seoul', checked: false, date: '2023-01-17', page: 2},
    ]);
    const [missionTablesCopy, setMissionTablesCopy] = useState([
        {num: 0, id:'hong', name:'Gildong', gender: 'Man', world: 'Korea', city: 'Seoul', checked: false, date: '2023-01-10', page: 0},
        {num: 1, id:'gang', name:'cheolsu', gender: 'Man', world: 'USA', city: 'NewYork', checked: false, date: '2023-01-12', page: 0},
        {num: 2, id:'kim', name:'Younghee', gender: 'Woman', world: 'Korea', city: 'Suwon', checked: false, date: '2023-01-11', page: 0},
        {num: 3, id:'park', name:'Gildong', gender: 'Man', world: 'China', city: 'Beijing', checked: false, date: '2023-01-10', page: 0},
        {num: 4, id:'lee', name:'Gilsook', gender: 'Woman', world: 'Japan', city: 'Tokyo', checked: false, date: '2023-01-09', page: 0},
        {num: 5, id:'choi', name:'cheolsu', gender: 'Man', world: 'Korea', city: 'Busan', checked: false, date: '2023-01-13', page: 1},
        {num: 6, id:'ga', name:'Gildong', gender: 'Man', world: 'Japan', city: 'Osaka', checked: false, date: '2023-01-11', page: 1},
        {num: 7, id:'na', name:'Younghee', gender: 'Woman', world: 'China', city: 'Shanghai', checked: false, date: '2023-01-16', page: 1},
        {num: 8, id:'da', name:'cheolsu', gender: 'Man', world: 'Korea', city: 'Daejeon', checked: false, date: '2023-01-15', page: 1},
        {num: 9, id:'ra', name:'Gilsook', gender: 'Woman', world: 'USA', city: 'LasVegas', checked: false, date: '2023-01-14', page: 1},
        {num: 10, id:'ma', name:'Gildong', gender: 'Man', world: 'Korea', city: 'Seoul', checked: false, date: '2023-01-17', page: 2},
    ]);
    const [popuptd,setPopuptd] = useState([]);
    const [popName,setpopName] = useState('');
    const [addWorld,setAddWorld] = useState(['World','World','World']);
    const [addCity,setAddCity] = useState(['City','City','City']);
    const [inputBox,setInputBox] = useState([]);
    const [inputBox2,setInputBox2] = useState([]);
    const [radiobtn,setRadiobtn] = useState([]);
    const [newCitys, setNewCitys] = useState([]);
    // const [addTable, setAddTable] = useState([]);
    let delCnt = 0;
    const [mode, setMode] = useState('base');
    let content = null;
    let contentP = null;
    if( mode === 'base'){
        content = <table className="missionTB">
                        <tr>
                            <td rowSpan="2">Select</td>
                            <td rowSpan="2">Id</td>
                            <td rowSpan="2">Name</td>
                            <td rowSpan="2">Gender</td>
                            <td colSpan="2">Location</td>
                        </tr>
                        <tr>
                            <td>World</td>
                            <td>City</td>
                        </tr>
                        <Add add={add} world={world} citys={citys} addWorld={addWorld} addCity={addCity}
                        inputBox={inputBox} inputBox2={inputBox2} radiobtn={radiobtn}
                        addCityPick={(value,value2,value3,value4,value5,value6) =>{
                            let newInputBox = [...inputBox];
                            newInputBox[value6] = value;
                            setInputBox(newInputBox);
                            let newInputBox2 = [...inputBox2];
                            newInputBox2[value6] = value2;
                            setInputBox2(newInputBox2);
                            let newRadio = [...radiobtn];
                            newRadio[value6] = value3;
                            setRadiobtn(newRadio);
                            let newWorld = [...addWorld];
                            newWorld[value6] = value4;
                            setAddWorld(newWorld);
                            let newCity = [...addCity];
                            newCity[value6] = value5;
                            setAddCity(newCity);  
                        }}/>
                        <MissionTaBle missionTable={missionTables} page={page} show={(num, id, name, gender, world, city) =>{
                            setPopupShow(true);
                            let table = {num: num, id: id, name: name, gender: gender, world: world, city: city};
                            setPopuptd(table);
                            setpopName(name);
                        }} onCheck={(check,num) =>{
                            const newTable = [...missionTables];
                            for(let i = 0; i < missionTables.length; i++){
                                if(newTable[i].num === Number(num)){
                                    const updateTable = {...newTable[i], checked:!check}
                                    newTable[i] = updateTable;
                                }
                            }
                        setMissionTables(newTable)
                        
        }}/></table>
        contentP = <Page length={missionTablesCopy.length} nowpage={page} onChangePage={page =>{
            setPage(page);
            setAdd(0);
            const newTable = [...missionTables];
            const newTableCopy = [...missionTablesCopy];
                for(let i = 0; i < missionTables.length; i++){
                    const updateTable = {...newTable[i], checked:false}
                    const updateTableCopy = {...newTableCopy[i], checked:false}
                    newTable[i] = updateTable;
                    newTableCopy[i] = updateTableCopy;
                }
                setMissionTables(newTable);
                setMissionTablesCopy(newTableCopy);
        }}/>  
    }else if( mode === 'detail'){
        content = <table className="missionTB">
        <tr>
            <td rowSpan="2">No</td>
            <td rowSpan="2">Id</td>
            <td rowSpan="2">Name</td>
            <td rowSpan="2">Gender</td>
            <td colSpan="2">Location</td>
        </tr>
        <tr>
            <td>World</td>
            <td>City</td>
        </tr>
        <tr>
            <td>{popuptd.num}</td>
            <td>{popuptd.id}</td>
            <td>{popuptd.name}</td>
            <td>{popuptd.gender}</td>
            <td>{popuptd.world}</td>
            <td>{popuptd.city}</td>
        </tr>
        </table>
    }
    // 메인 화면 창
    return<div>
        <Popup popupShow={popupShow} table={popuptd} citys={citys} name={popName} exit={()=>{
            setPopupShow(false);
        }} link={()=>{
            setPopupShow(false);
            setMode('detail');
        }} changeName={name =>{
            setpopName(name);
        }} changeTB={(num, name, gender, world, city) =>{
            setPopupShow(false);
            const newTables = [...missionTables];
            const newTablesCopy = [...missionTablesCopy];
            for(let i = 0; i< newTables.length; i++){
                if(newTables[i].num === num){
                    newTables[i] = {...missionTables[i], name:name, gender: gender, world:world, city:city};
                    newTablesCopy[i] = {...missionTablesCopy[i], name:name, gender: gender, world:world, city:city};
                }
                setMissionTables(newTables);
                setMissionTablesCopy(newTablesCopy);
            }
        }}/>
        <h2>Grid 그리드</h2>
        <from>
            <div className="mission">
                <input type='text' className="inputbox" placeholder="Id" onChange={event=>{
                    setId(event.target.value);
                }}/>
                <input type='text' className="inputbox" placeholder="Name" onChange={event =>{
                    setName(event.target.value);
                }}/>
                <span><input type='radio' name="gender" id="man" value='Man' onClick={event =>{
                    setGender(event.target.value);
                }}/><label for="man" className="radiobtn">Man</label>
                <input type='radio' name="gender" id="woman" value='Woman' onClick={event =>{
                    setGender(event.target.value);
                }}/><label for="woman" className="radiobtn">Woman</label></span>
                <span><Link to="/"><input type='radio' name="lang" id="ko"/></Link><label for="ko" className="radiobtn">Korean</label>
                <Link to="/en"><input type='radio' name="lang" id="en"/></Link><label for="en" className="radiobtn">English</label></span><br/>
                <SelectWorld world={world} onChangeWorld={(world) =>{
                    setPickworld(world);
                    setPickcity('City');
                    let updateCitys = [...citys];
                    updateCitys = citys.filter(city => city.world === world);
                    
                    setNewCitys(updateCitys);
                }}/>
                <SelectCity citys={newCitys} world={pickworld} onChangeCity={city =>{
                    setPickcity(city);
                }}/>
                <input type='date' className="inputbox" onChange={event =>{
                    setStartDate(event.target.value);
                }}/>
                <input type='date' className="inputbox" onChange={event =>{
                    setEndDate(event.target.value);
                }}/>
                <div className="bottom">
                    <p>
                    <button type="button" className="btn" onClick={()=>{
                        let newMissionTB = [...missionTables];
                        for(let i = 0; i< newMissionTB.length; i++){
                            if(newMissionTB[i].checked){
                                newMissionTB.splice(i,1);
                                i--;
                                delCnt++;
                            }
                        }
                        for(let i = 0; i< newMissionTB.length; i++){
                            for(let j = 0; j < (newMissionTB.length/5); j++){
                                if(i < (5+(j*5)) && i > ((j*5))){
                                    newMissionTB[i].page = j;
                                }
                            }
                        }
                        setMissionTables(newMissionTB);
                        setMissionTablesCopy(newMissionTB);
                        if(delCnt === 0){
                            alert("not Delete Row")
                        }else{
                            alert(delCnt+"Number Row Delete.")
                        }
                        delCnt = 0;
                    }}>Delete</button>
                    <button type="button" className="btn" onClick={()=>{
                         var today = new Date();

                         var year = today.getFullYear();
                         var month = ('0' + (today.getMonth() + 1)).slice(-2);
                         var day = ('0' + today.getDate()).slice(-2);

                         var dateString = year + '-' + month  + '-' + day;

                        let overlap = 0;
                        let newMissionTB = [...missionTables];
                        for(let k = 0; k< add; k++){
                            for(let j = 0; j< newMissionTB.length; j++){
                                if(inputBox[k] === newMissionTB[j].id){    
                                    overlap++;
                                }
                            }
                        }
                        for(let i = 0; i< add; i++){
                            let pageNum = Math.floor((missionTables.length+i)/5);
                            if(inputBox[i] !== undefined && inputBox2[i] !== undefined && radiobtn[i] !== undefined && addWorld[i] !== '국가' && addCity[i] !== '도시'){
                                if(overlap > 0){
                                    alert("There are duplicate IDs.");
                                    overlap = 0;
                                    break;
                                }else{
                                    newMissionTB.push({
                                        num: num+i,
                                        id: inputBox[i],
                                        name: inputBox2[i],
                                        gender: radiobtn[i],
                                        world:addWorld[i],
                                        city:addCity[i],
                                        checked:false,
                                        date: dateString,
                                        page:pageNum
                                    })

                                    if(i === add-1){
                                        setNum(num+add);  
                                        setAdd(0);
                                        setMissionTables(newMissionTB);
                                        setMissionTablesCopy(newMissionTB);
                                        setInputBox([]);
                                        setInputBox2([]);
                                        setRadiobtn([]);
                                        setAddWorld(['World','World','World']);    
                                        setAddCity(['City','City','City']);    
                                    }
                                }
                            }else{
                                alert("Please enter all information.");
                            }
                        }      
                    }}>Save</button>
                    <button type="button" className="btn" onClick={()=>{
                        if(add < 3){
                            setAdd(add+1);
                        }else{
                            alert('No more can be added.')
                        }
                    }}>Add</button>
                    <button type="button" className="btn" onClick={()=>{
                        setMissionTables(missionTablesCopy);
                        let newMissionTB = null;
                          if( pickworld !== 'World'){
                            newMissionTB = [...missionTablesCopy];
                            if(id !== ''){
                                newMissionTB = newMissionTB.filter(missiontd => missiontd.id === id);  
                            }
                            if(name !== ''){
                                newMissionTB = newMissionTB.filter(missiontd => missiontd.name === name);  
                            }
                            if(gender !== ''){
                                newMissionTB = newMissionTB.filter(missiontd => missiontd.gender === gender);  
                            }
                            if(startDate !== ''){
                                newMissionTB = newMissionTB.filter(missiontd => missiontd.date >= startDate);  
                            }
                            if(endDate !== ''){
                                newMissionTB = newMissionTB.filter(missiontd => missiontd.date <= endDate);  
                            }
                            newMissionTB = newMissionTB.filter(missiontd => missiontd.world === pickworld);
                            if( pickcity !== 'City'){
                                newMissionTB = newMissionTB.filter(missiontd => missiontd.city === pickcity);
                            }
                            setMissionTables(newMissionTB)
                         }else{
                            newMissionTB = [...missionTablesCopy];
                            if(id !== ''){
                                newMissionTB = newMissionTB.filter(missiontd => missiontd.id === id);  
                            }
                            if(name !== ''){
                                newMissionTB = newMissionTB.filter(missiontd => missiontd.name === name);  
                            }
                            if(gender !== ''){
                                newMissionTB = newMissionTB.filter(missiontd => missiontd.gender === gender);  
                            }
                            if(startDate !== ''){
                                newMissionTB = newMissionTB.filter(missiontd => missiontd.date >= startDate);  
                            }
                            if(endDate !== ''){
                                newMissionTB = newMissionTB.filter(missiontd => missiontd.date <= endDate);  
                            }
                            setMissionTables(newMissionTB)
                          }
                    }}>Search</button>
                    </p>
                        {content}
                        {contentP}
                </div>
            </div>
        </from>
    </div>
}

export default HomeEn;