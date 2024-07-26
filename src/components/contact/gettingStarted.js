import { Subtitle1, tokens } from "@fluentui/react-components";
import useInnerHtml from "../../utils/useInnerHtml";

const GettingStartaed = ({ data }) => {
    return (
        <>
            <div style={{ marginBottom: tokens.spacingVerticalL }}>
                {data?.introduction && <h4><Subtitle1>Introduction</Subtitle1></h4>}
                {useInnerHtml(data?.introduction)}
            </div>
            <div style={{ marginBottom: tokens.spacingVerticalL }}>
            {data?.expressInterest && <h4><Subtitle1>Express Interest</Subtitle1></h4>}
                {useInnerHtml(data?.expressInterest)}
            </div>

            <div style={{ marginBottom: tokens.spacingVerticalL }}>
                {data?.authenticate && <h4><Subtitle1>Authenticate and Integrate APIs</Subtitle1></h4>}
                {useInnerHtml(data?.authenticate)}
            </div>
            
            <div style={{ marginBottom: tokens.spacingVerticalL }}>
                {data?.obtainLoginCredentials && <h4><Subtitle1>Obtain Login Credentials</Subtitle1></h4>}
                {useInnerHtml(data?.obtainLoginCredentials)}
            </div>
            <div style={{ marginBottom: tokens.spacingVerticalL }}>
                {data?.signTermsandConditions && <h4><Subtitle1>Sign the EDTC</Subtitle1></h4>}
                {useInnerHtml(data?.signTermsandConditions)}
            </div>
            <div style={{ marginBottom: tokens.spacingVerticalL }}>
                {data?.standards && <h4><Subtitle1>Standards</Subtitle1></h4>}
                {useInnerHtml(data?.standards)}
            </div>
            <div style={{ marginBottom: tokens.spacingVerticalL }}>
                {data?.tryThisAPI && <h4><Subtitle1>Try this API</Subtitle1></h4>}
                {useInnerHtml(data?.tryThisAPI)}
            </div>

        </>
    )
}
export default GettingStartaed;