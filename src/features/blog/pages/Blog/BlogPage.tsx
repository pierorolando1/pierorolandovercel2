import BlogNavbar from "../../components/BlogNavbar"
import { useStoreBlog } from "../../zustand/navbarBlog"

export default () => {

    const show = useStoreBlog(state => state.showBlogBar)

    console.log("SHOW", show)

    return (
        <>
            {
                show ? <BlogNavbar /> : <></>
            }
            <div style={{ height: "120vh", paddingTop: "5rem" }}>
                YOOOOOO
            </div>
        </>
    )
}
