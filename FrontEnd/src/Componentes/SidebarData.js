
import '../Sidebar.css';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import GroupIcon from '@material-ui/icons/Group';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


export const SidebarData = [ 

    {
        title:"Cadastrar Usuário",
        icon: <PersonAddIcon />,
        link:"/CadastrarUsuario"
        
    },
    {
        title:"Lista de Usuários",
        icon: <GroupIcon />,
        link:"/ListadeUsuários"
        
    },
    {
        title:"Cadastrar Ata",
        icon: <AssignmentReturnedIcon/>,
        link: "/CadastrarAta"
        
    },
    {
        title:"Gerar Ata de Reunião",
        icon: <AssignmentTurnedInIcon />,
        link:"/GerarAtadeReunião"
        
    },
    {
        title:"Adicionar Revisão da Ata", 
        icon: <AssignmentLateIcon  />,
        link:"/AdicionarRevisãodaAta"
        
    },
    {
        title:"Revisões da Ata", 
        icon: <AssignmentIcon />,
        link:"/RevisõesdaAta"
        
    },
    {
        title:"Monitorar Ata de Reunião", 
        icon: <AssignmentReturnIcon />,
        link:"/MonitorarAtadeReunião"
        
    },
    {
        title:"Log out", 
        icon: <ArrowBackIcon/>,
        link:"/Sair"
        
    }
   

]

