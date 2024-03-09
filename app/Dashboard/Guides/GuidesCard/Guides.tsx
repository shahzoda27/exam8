import React, { Dispatch, SetStateAction, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteGuidesModal from '@/app/Modals/GuidesModal/DeleteGuidesModal/page';
import { IGuides } from '@/types/guides.types';
interface IGuidesCardProps {
    item: IGuides,
    setModalEdit: Dispatch<SetStateAction<boolean>>,
    guidesId: string | undefined;
    setGuidesId: Dispatch<SetStateAction<string | undefined>>
}
const GuidesCard: React.FC<IGuidesCardProps> = ({ item, setModalEdit, guidesId,  setGuidesId }) => {
    const [expanded, setExpanded] = React.useState(false);
    const [guidesModal, setGuidesModal] = useState(false);
    const [itemIdd, setItemId] = useState<string | undefined>("")
    const [active, setActive] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const deleteGuides = (itemId: string | undefined) => {
        setGuidesModal(true);
        setItemId(itemId);
    }
    const editGuides = (item: any) => {
        setModalEdit(true)
        setGuidesId(item)
    }
    const toggle = () => {
        setGuidesModal(false);
        setItemId("")
    }
    const popUp = () => {
        setActive(!active)
    }
    return (
        <div>
            <DeleteGuidesModal open={guidesModal} toggle={toggle} id={itemIdd} />
            <Card sx={{ maxWidth: 300 }} className=' relative'>
                <CardHeader
                    action={<IconButton aria-label="settings" onClick={popUp}><MoreVertIcon /></IconButton>}
                    title={`${item?.title}`}
                    subheader={`${item?.content}`}
                />
                <div className={`${active ? " " : " hidden"} absolute border-[1px] top-1px right-0 bg-white w-[100px] h-[100px]`}>
                    <button onClick={() => deleteGuides(item?._id)} className='py-[5px] px-[15px] w-[100%] border-[1px] bg-red-700 text-[#fff] rounded-[5px]'>delete</button>
                    <button onClick={() => editGuides(item)} className='py-[5px] px-[15px] w-[100%] border-[1px] bg-blue-700 text-[#fff] rounded-[5px]'>edit</button>
                </div>
                <Typography variant="body2" color="text.secondary">
                {item?.title}
                {item?.content}
                </Typography>
            </Card>
        </div>
    );
}
export default GuidesCard;
