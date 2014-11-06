using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SqliteDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {


            //cn.com.sina.smsinter.SMSWebServiceSoapPortClient ws = new cn.com.sina.smsinter.SMSWebServiceSoapPortClient();
            //string result=ws.sendXml("Sina", "id", "pas", "15801606686,", "msg", "new");
            ViewBag.msg = "11";
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}