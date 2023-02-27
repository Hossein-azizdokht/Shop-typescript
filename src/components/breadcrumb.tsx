import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <>
            {breadcrumbs.map(({
                match,
                breadcrumb
            }:any) => (
                <NavLink key={match.pathname} to={match.pathname}>{breadcrumb}</NavLink>

            ))}
        </>
    );
};
export default Breadcrumbs