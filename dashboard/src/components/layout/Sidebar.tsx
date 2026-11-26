import {RadioTower,LayoutDashboard,Map,ChartNoAxesCombined,Wifi,GraduationCap} from 'lucide-react'
import type {Page} from '../../types/traffic'
const items=[{id:'dashboard',label:'Resumen',Icon:LayoutDashboard},{id:'intersection',label:'Intersección',Icon:Map},{id:'statistics',label:'Estadísticas',Icon:ChartNoAxesCombined},{id:'connectivity',label:'Conectividad',Icon:Wifi},{id:'learn',label:'Aprende',Icon:GraduationCap}] as const
export default function Sidebar({page,navigate}:{page:Page;navigate:(p:Page)=>void}){
 return <aside className="st-sidebar"><div className="st-brand"><span className="st-brand-icon"><RadioTower size={25}/></span><div><strong>Smart Traffic<span className="text-gold">.</span></strong><small>CCT-UNI / MOBILITY LAB</small></div></div><p className="st-nav-label">CENTRO DE CONTROL</p><nav aria-label="Navegación principal">{items.map(({id,label,Icon})=><button key={id} aria-current={page===id?'page':undefined} className={page===id?'selected':''} onClick={()=>navigate(id)}><Icon size={19}/><span>{label}</span></button>)}</nav><div className="st-sidebar-footer"><span>01 / OPEN DAY 2026</span><p>Una ciudad que aprende a moverse.</p></div></aside>
}
