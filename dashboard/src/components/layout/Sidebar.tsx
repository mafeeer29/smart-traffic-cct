import {useState} from 'react'
import {LayoutDashboard,Map,ChartNoAxesCombined,Wifi,GraduationCap} from 'lucide-react'
import type {Page} from '../../types/traffic'
const items=[{id:'dashboard',label:'Simulador',Icon:LayoutDashboard},{id:'intersection',label:'Explora',Icon:Map},{id:'statistics',label:'Analiza',Icon:ChartNoAxesCombined},{id:'connectivity',label:'Conectividad',Icon:Wifi},{id:'learn',label:'Aprende',Icon:GraduationCap}] as const
export default function Sidebar({page,navigate}:{page:Page;navigate:(p:Page)=>void}){
 const [missing,setMissing]=useState(false)
 return <header className="city-header"><div className="city-brand">{!missing&&<img src={import.meta.env.BASE_URL+'visual/cct-white.png'} alt="CCT-UNI" onError={()=>setMissing(true)}/>}<span className="city-institution">CCT-UNI<small>Centro Cultural de<br/>Telecomunicaciones</small></span><div className="city-wordmark">Smart <b>Traffic.</b><small>URBAN MOBILITY LAB</small></div></div><nav aria-label="Navegación principal">{items.map(({id,label,Icon})=><button key={id} aria-current={page===id?'page':undefined} onClick={()=>navigate(id)}><Icon size={17}/>{label}</button>)}</nav></header>
}
