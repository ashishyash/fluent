import { Accordion, AccordionHeader, AccordionItem, AccordionPanel, Title2, tokens } from "@fluentui/react-components";
import useInnerHtml from "../../utils/useInnerHtml";
const Faq = ({data})=>{
    return(
        <>
        {data?.questions?.map((faqItem) => <div key={faqItem.heading}>
            <h3><Title2>{faqItem.heading}</Title2></h3>
            <Accordion collapsible={true} style={{marginBottom: tokens.spacingVerticalXXL}}>
                {faqItem.questions.map((item) => {
                  return  <AccordionItem value={item.question} key={item.question}>
                        <AccordionHeader>
                            <h4 style={{fontWeight: tokens.fontWeightBold}}>{item.question}</h4>
                        </AccordionHeader>
                        <AccordionPanel>
                            <Panel answer={item.answer}/>
                        </AccordionPanel>
                    </AccordionItem>
                })}                
            </Accordion>
        </div>)}
        </>
    )
}
export default Faq;

const Panel = ({answer})=> {
    return(
        <div style={{paddingLeft: tokens.spacingVerticalXXL}}>
             {useInnerHtml(answer)}
        </div>
    )
}
