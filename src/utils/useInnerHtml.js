const useInnerHtml = (htmlResp) => {
    const markup = { __html: htmlResp };
    return (<div dangerouslySetInnerHTML={markup}></div>);
}
export default useInnerHtml;