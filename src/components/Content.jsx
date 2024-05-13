import { useState } from 'react';
import Styles from './Content.module.css'
import SearchBar from './SearchBar';
export default function Content() { 
    let [myimg,setMyimg] = useState();
    function mypara(x)
    {
        setMyimg(x);
        console.log('In content component');
        console.log(x);
    }
    return (
        <div>
            <div className={`${Styles.mycointainer}  text-center`}>
                <img className={Styles.myimg} src={myimg ? myimg : './AI_image.jpeg' } alt="" />
            </div>
            <SearchBar yourpara= {mypara} />
        </div>
        
    );
}