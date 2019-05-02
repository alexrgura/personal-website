var READTHEDOCS_DATA = {
    "project": "sequelize", 
    "theme": "readthedocs", 
    "version": "v3", 
    "source_suffix": ".md", 
    "api_host": "https://readthedocs.org", 
    "language": "en", 
    "commit": "13427d4937daa811b628b5f6dfcbbebba6d25608", 
    "docroot": "/home/docs/checkouts/readthedocs.org/user_builds/sequelize/checkouts/v3/docs", 
    "builder": "mkdocs", 
    "page": null
}

// Old variables
var doc_version = "v3";
var doc_slug = "sequelize";
var page_name = "None";
var html_theme = "readthedocs";

READTHEDOCS_DATA["page"] = mkdocs_page_input_path.substr(
    0, mkdocs_page_input_path.lastIndexOf(READTHEDOCS_DATA.source_suffix));
