import {Box, Flex, Spacer, Text, Avater} from '@chakra-ui/react';
import { FaBed, FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from "millify";
import { baseUrl, fetchApi } from '../../utils/fetchapi';
import ImageScrollerbar from '../../components/ImageScrollerbar';

const PropertyDetails = ( {propertyDetails: { price, rentFrequency, rooms, titles, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos}}) => (
    <Box maxWidth="1000px" margin="auto" p='4'>
        {photos && <ImageScrollerbar data={photos}/>}
    </Box>
)

export default PropertyDetails;

export async function getServerSideProps({params:{id}}){
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)

    return{
        props:{
            propertyDetails: data,
        },
    };
}