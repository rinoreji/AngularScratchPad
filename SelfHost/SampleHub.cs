using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SelfHost
{
    public class SampleHub : Hub
    {
        public void Send(string name, string message)
        {
            Clients.All.addMessage(name, message);
        }

        public string SampleMethod(string input)
        {
            return string.Format("{0} - Message received: '{1}'", DateTime.Now.ToString(), input);
        }
    }
}
