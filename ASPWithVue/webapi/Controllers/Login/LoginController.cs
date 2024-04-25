using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers.Login
{
    [Route("[controller]")]
    public class LoginController : Controller
    {

        public IActionResult Login()
        {
            return View("MainView");
        }
    }
}
