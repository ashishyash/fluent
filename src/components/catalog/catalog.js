import { Title1, useId, Input, makeStyles, tokens, Text , Button} from "@fluentui/react-components";
import { useEffect, useState } from "react";
import useFetch from "../../utils/useFetch";
import { apiUrls, baseUrlBackend } from "../../utils/constant";
import { useSelector } from "react-redux";
import AppCard from "../../partials/appcard/appcard";
const useClasses = makeStyles({
    label: {
        display: 'block',
        marginBottom: tokens.spacingVerticalM
    }
});

const Catalog = () => {
    const caseStudy = useFetch(`${baseUrlBackend}${apiUrls.caseStudy}`);
    const solutionSet = useFetch(`${baseUrlBackend}${apiUrls.solutionSet}`);
    const { apis } = useSelector((state) => state.apis);
    const { apps } = useSelector((state) => state.apps);
    const [searchText, setSearchText] = useState('');
    const [filterdApis, setFilteredApi] = useState([]);
    const solutionSetApis = solutionSet?.data?.solutionsets?.reduce((apis, sets) => {
        apis = apis.concat(sets.apis);
        return apis;
    }, []);
    const caseStudyApis = caseStudy?.data?.casestudy?.reduce((apis, sets) => {
        apis = apis.concat(sets.apis);
        return apis;
    }, []);


    const handleTextChange = (text) => {
        setSearchText(text);
    }

    const search = ()=>{
        const result = apis?.filter((item) => item.sortingDisplayName.includes(searchText));
        setFilteredApi(result);
    }

    return (
        <>
            <div>
                <h1><Title1>Catalog</Title1></h1>
                {<SearchForm onTextChange={handleTextChange} />}
                <Button shape="circular" appearance="primary" onClick={search}>Search</Button>
                <div>
                    <Text as='h4'>APPs</Text>
                    <div className="card-wrapper" style={{ marginTop: tokens.spacingVerticalXL }}>
                        {apps?.map((data) => <AppCard key={data.id} info={data} type={'apps'} />)}
                    </div>
                </div>
                <div>
                    <Text as='h4'>APIs</Text>
                    {searchText?.length === 0 && <div className="card-wrapper" style={{ marginTop: tokens.spacingVerticalXL }}>
                        {apis?.map((data) => <AppCard key={data.id} info={data} type={'apis'} />)}
                    </div>}
                    {searchText?.length && <div className="card-wrapper" style={{ marginTop: tokens.spacingVerticalXL }}>
                        {filterdApis?.map((data) => <AppCard key={data.id} info={data} type={'apis'} />)}
                    </div>}
                </div>
            </div>
        </>
    );
}
export default Catalog;

const SearchForm = ({ onTextChange }) => {
    const classes = useClasses();
    const [searchString, setSearchString] = useState('');
    const searchId = useId('input');
    useEffect(() => {
        onTextChange(searchString);
    }, [onTextChange, searchString]);

    return (
        <form>
            <div>
                <label className={classes.label} htmlFor={searchId}>Search</label>
                <Input id={searchId} type="text" value={searchString} onChange={(e) => setSearchString(e.target.value)} />
            </div>
        </form>
    );
}