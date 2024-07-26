import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { Title3, Text, tokens, Title2 } from "@fluentui/react-components";
import useInnerHtml from "../../utils/useInnerHtml";
const ApiDetail = () => {
    const { id, type } = useParams();
    const { apis } = useSelector((state) => state.apis);
    const { apps } = useSelector((state) => state.apps);
    const [detailData, setDetailData] = useState({});
    const getDetailData = useCallback((id, type) => {
        if (type === 'apps' && apps?.length) {
            setDetailData(apps?.find((appItem) => appItem.internalName.replace(/\s/g, '') === id));
        }
        if (type === 'apis' && apis?.length) {
            setDetailData(apis?.find((apiItem) => apiItem.internalName.replace(/\s/g, '') === id));
        }
    }, [setDetailData, apis, apps]);
    useEffect(() => {
        // if (type === 'apps' && apps.length) {
        //     setDetailData( apps?.find((appItem) => appItem.internalName.replace(/\s/g, '') === id));
        // }
        // if (type === 'apis' && apis.length) {
        //     setDetailData(apis?.find((apiItem) => apiItem.internalName.replace(/\s/g, '') === id));
        // }
        getDetailData(id, type);
        console.log('api detail rendered');
        console.log(detailData);

    }, [getDetailData, id, type, detailData]);


    return (
        <>
            <Title2>{detailData?.displayName || detailData?.internalName}</Title2>
            <div style={{paddingTop: tokens.spacingVerticalXXL}}>
                <Text>{detailData?.shortDescription}</Text>
            </div>
            <div style={{paddingTop: tokens.spacingVerticalXXL}}>
                {detailData?.description?.featuresBenefits && <h2 style={{paddingBottom: tokens.spacingVerticalM}}> <Title3>Benifits</Title3>  </h2>}
                <Text> {useInnerHtml(detailData?.description?.featuresBenefits)}</Text>
            </div>
            <div style={{paddingTop: tokens.spacingVerticalXXL}}>
            {detailData?.description?.howDoesItWork && <h2 style={{paddingBottom: tokens.spacingVerticalM}}> <Title3>How Does it Work</Title3>  </h2>}
                <Text> {useInnerHtml(detailData?.description?.howDoesItWork)}</Text>
            </div>
            <div style={{paddingTop: tokens.spacingVerticalXXL}}>
            {detailData?.description?.useCases && <h2 style={{paddingBottom: tokens.spacingVerticalM}}> <Title3>Use Cases</Title3>  </h2>}
                <Text> {useInnerHtml(detailData?.description?.useCases)}</Text>
            </div>
        </>
    )
}
export default ApiDetail;