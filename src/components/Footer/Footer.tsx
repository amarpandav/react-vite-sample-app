import {Link} from "react-router-dom";
import classes from './Footer.module.css';

export default function Footer() {

    return (


        <footer className={classes.footer}>

            Footer
            <br></br>
            {
                //Option 1: Using path. This will follow the path as per user navigation in the browser.
                //Unfortunatly, this is not working when i am on (sample10) product details page. it should go back to product page
                // but instead its going back to home page. If i copy below Back tag inside Product details page (which i did Back2)
                // then it works fine. This shows that it also matters where you put the Link tag.
                //Footer is generic page so it would respect root path always

            }
            <Link to=".." relative="path">Back</Link>

            {
                //Option 2: Using route. This will follow the path defined in App.tsx which is router path.
                //<Link to=".." relative="route">Back</Link>
            }
        </footer>

    );
}
