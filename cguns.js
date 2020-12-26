import React from 'react'
import '../App.css';
import p250 from './p250.png'
import revolver from './revolver.png'
import deagle from './Deagle.png'
import beretts from './beretts.png'
import zeus from './Zeus.png'
import mp5sd from './mp5sd.png'
import mp7 from './mp7.png'
import p90 from './p90.png'
import ump from './ump.png'
import m249 from './m249.png'
import negev from './negev.png'
import awp from './awp.png'
import ssg08 from './ssg08.png'
import tac21 from './tac21.png'
import nova from './nova.png'
import xm1014 from './xm1014.png'
import m9 from './m9.png'
import kn2 from './kn2.png'
import kn3 from './kn3.png'
import kn4 from './kn4.png'
import kn5 from './kn5.png'
import kn6 from './kn6.png'
import kn7 from './kn7.png'
import kn8 from './kn8.png'
import kn9 from './kn9.png'
import kn10 from './kn10.png'
import kn11 from './kn11.png'
import kn12 from './kn12.png'
import kn13 from './kn13.png'
import kn14 from './kn14.png'
import kn15 from './kn15.png'
import kn16 from './kn16.png'
import kn17 from './kn17.png'
import kn18 from './kn18.png'
import kn19 from './kn19.png'
import kn20 from './kn20.png'


function Cguns(){
	return(
	<div className="Cguns">

	<h1>Pistols:</h1>
	<div className="Pistols">
    
    <div id="lblock"><img src={p250}/></div>
    <div id="bblock"> 
    <ul>
     <li>Name : p250</li>
     <li>Damage : 38</li>
     <li>Price : 300$</li>
     <li>Rate of fire : 400</li>
     <li>Reload time : 2.2s</li>
     <li>Magazine capacity : 13/26</li>
     </ul>
     </div>
    

    <div id="lblock"><img src={revolver}/></div>
    <div id="bblock"> 
    <ul>
     <li>Name : Revolver</li>
     <li>Damage : 86</li>
     <li>Price : 600$</li>
     <li>Rate of fire : 85</li>
     <li>Reload time : 2.7s</li>
     <li>Magazine capacity : 8/8</li>
     </ul>
     </div>
    

    <div id="lblock"><img src={deagle}/></div>
    <div id="bblock"> 
    <ul>
     <li>Name : Desert eagle</li>
     <li>Damage : 35</li>
     <li>Price : 700$</li>
     <li>Rate of fire : 267</li>
     <li>Reload time : 2.2s</li>
     <li>Magazine capacity : 7/35</li>
     </ul>
     </div>



    <div id="lblock"><img src={beretts}/></div>
    <div id="bblock">
     <ul>
     <li>Name : Dual beretts</li>
     <li>Damage : 38</li>
     <li>Price : 400$</li>
     <li>Rate of fire : 500</li>
     <li>Reload time : 3.8s</li>
     <li>Magazine capacity : 30/120</li>
     </ul>
     </div>



    <div id="lblock"><img src={zeus}/></div>
    <div id="bblock">
     <ul>
     <li>Name : Zeus x27</li>
     <li>Damage : one shot </li>
     <li>Price : 200$</li>
     <li>Rate of fire : 1 bullet</li>
     <li>Reload time : no </li>
     <li>Magazine capacity : 1/0</li>
     </ul>
     </div>
    </div>


  <h1>Submachine guns:</h1>
  <div className="Submachine-guns">

  <div id="lblock"><img src={mp5sd}/></div>
  <div id="bblock"> 
  <ul>
     <li>Name : Mp5Sd</li>
     <li>Damage : 27</li>
     <li>Price : 1500$</li>
     <li>Rate of fire : 800</li>
     <li>Reload time : 2.97s</li>
     <li>Magazine capacity : 30/120</li>
     </ul>
     </div>



  <div id="lblock"><img src={mp7}/></div>
  <div id="bblock"> 
  <ul>
     <li>Name : Mp7</li>
     <li>Damage : 29</li>
     <li>Price : 1500$</li>
     <li>Rate of fire : 800</li>
     <li>Reload time : 3.1s</li>
     <li>Magazine capacity : 30/120</li>
     </ul>
     </div>



  <div id="lblock"><img src={p90}/></div>
  <div id="bblock"> 
  <ul>
     <li>Name : p90</li>
     <li>Damage : 26</li>
     <li>Price : 2350$</li>
     <li>Rate of fire : 857</li>
     <li>Reload time : 3.3s</li>
     <li>Magazine capacity : 50/100</li>
     </ul>
     </div>


  <div id="lblock"><img src={ump}/></div>
  <div id="bblock">
   <ul>
     <li>Name : Ump-45</li>
     <li>Damage : 35</li>
     <li>Price : 1200$</li>
     <li>Rate of fire : 666</li>
     <li>Reload time : 3.5s</li>
     <li>Magazine capacity : 25/100</li>
     </ul>
     </div>

   </div>
  <h1>Machine guns:</h1>
  <div className="Machine-guns">


  <div id="lblock"><img src={m249}/></div>
  <div id="bblock"> 
  <ul>
     <li>Name : M249</li>
     <li>Damage : 32</li>
     <li>Price : 5200$</li>
     <li>Rate of fire : 750</li>
     <li>Reload time : 5.7s</li>
     <li>Magazine capacity : 100/200</li>
     </ul>
     </div>



  <div id="lblock"><img src={negev}/></div>
  <div id="bblock"> 
  <ul>
     <li>Name : Negev</li>
     <li>Damage : 35</li>
     <li>Price : 1700$</li>
     <li>Rate of fire : 800</li>
     <li>Reload time : 5.7s</li>
     <li>Magazine capacity : 150/200</li>
     </ul>
     </div>

   </div>



   <h1>Sniper riffles:</h1>

<div className="Snipers">
   <div id="lblock"><img src={awp}/></div>
   <div id="bblock"> 
   <ul>
     <li>Name : AWP</li>
     <li>Damage : 115</li>
     <li>Price : 4750$</li>
     <li>Rate of fire : 41</li>
     <li>Reload time : 3.6s</li>
     <li>Magazine capacity : 10/30</li>
     </ul>
     </div>



   <div id="lblock"><img src={ssg08}/></div>
   <div id="bblock"> 
   <ul>
     <li>Name : SSG08</li>
     <li>Damage : 88</li>
     <li>Price : 1700$</li>
     <li>Rate of fire : 48</li>
     <li>Reload time : 3.7s</li>
     <li>Magazine capacity : 10/90</li>
     </ul>
     </div>


   </div>

<h1>Shotguns:</h1>
  	
    <div className="Shotguns">



    <div id="lblock"><img src={nova}/></div>
    <div id="bblock"> 
    <ul>
     <li>Name : Nova</li>
     <li>Damage : 234</li>
     <li>Price : 1050$</li>
     <li>Rate of fire : 68</li>
     <li>Reload time : 3.7s</li>
     <li>Magazine capacity : 8/32</li>
     </ul>
     </div>

    <div id="lblock"><img src={xm1014}/></div>
    <div id="bblock"> 
    <ul>
     <li>Name : XM1014</li>
     <li>Damage : 120</li>
     <li>Price : 2000$</li>
     <li>Rate of fire : 171</li>
     <li>Reload time : 2.8s</li>
     <li>Magazine capacity : 7/32</li>
     </ul>
     </div>
    </div>
   <h1>Knives:</h1>


   <div className="Knives">

   <div><img src={m9}/></div>
   <div><img src={kn2}/></div>
   <div><img src={kn3}/></div>
   <div><img src={kn4}/></div>
   <div><img src={kn5}/></div>
   <div><img src={kn6}/></div>
   <div><img src={kn7}/></div>
   <div><img src={kn8}/></div>
   <div><img src={kn9}/></div>
   <div><img src={kn10}/></div>
   <div><img src={kn11}/></div>
   <div><img src={kn12}/></div>
   <div><img src={kn13}/></div>
   <div><img src={kn14}/></div>
   <div><img src={kn15}/></div>
   <div><img src={kn16}/></div>
   <div><img src={kn17}/></div>
   <div><img id="kn18" src={kn18}/></div>
   <div><img src={kn19}/></div>
   <div><img id="kn20" src={kn20}/>
   </div>

 
   


    </div>
	</div>
	)
}


export default Cguns;