enum PAGES {
    HOME = "/",
    LOGIN = "/login",
    Blog = "/blog",
    ADMIN = "/admin",

}

function handlePage(page: PAGES) {
    switch (page) {
        case PAGES.HOME:
            // Handle home page
            return "/";
        case PAGES.LOGIN:
            // Handle login page
            return "/login";
        case PAGES.Blog:
            // Handle blog page
            return "/blog";
        case PAGES.ADMIN:
            // Handle admin page
            return "/admin";
        default:
            return "Unknown Page";
    }
}

