import { Title1, useId, Input, makeStyles, tokens } from "@fluentui/react-components";
import { useEffect, useState } from "react";

const useClasses = makeStyles({
    label: {
        display: 'block',
        marginBottom: tokens.spacingVerticalM
    }
});

const Catalog = () => {
   const [searchText, setSearchText] = useState('');
    const handleTextChange = (text) => {
       setSearchText(text);
    }
   
    return (
        <>
            <div>
                <h1><Title1>Catalog</Title1></h1>
                {<SearchForm onTextChange={handleTextChange} />}
            </div>
        </>
    );
}
export default Catalog;

const SearchForm = (props) => {
    const classes = useClasses();
    const [searchString, setSearchString] = useState('');
    const searchId = useId('input');
    useEffect(() => {
        props.onTextChange(searchString);
    }, [props, searchString]);

    return (
        <form>
            <div>
                <label className={classes.label} htmlFor={searchId}>Search</label>
                <Input id={searchId} type="text" value={searchString} onChange={(e) => setSearchString(e.target.value)} />
            </div>
        </form>
    );
}