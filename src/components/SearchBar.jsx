import { useEffect, useState } from "react";

export default function SearchBar({yourpara}) {
    let [pic,setPic] = useState();
    async function myfunc() {
        let URL = 'https://api.unsplash.com/search/photos';
        let KEY = 'DYqR8AtkuqjnKsllwodEyk02bYyGjvh1qRBlC7owapU';
        let PAGE_NO = 1;
        let MAX_PAGE = 10;
      
        try {
            let x = await fetch(`${URL}?query=${pic}&page=${PAGE_NO}&per_page=${MAX_PAGE}&client_id=${KEY}`)
            let y = await x.json();
            let z= y.results[0].urls.raw
            console.log('In searxh bar component');
              console.log(z);
                yourpara(z);
            
        } catch (error) {
            yourpara();
            alert('match not found');
            
        }
        
    
}

    return (
        <div>
            <div className="text-center mt-4" >
                <input type="text" className="w-50" id="" onChange={(e)=> {setPic(e.target.value)}} />
                <button className="bg-danger text-white  rounded-pill" onClick={myfunc}>Generate</button>

            </div>
        </div>
        
        
    );
}