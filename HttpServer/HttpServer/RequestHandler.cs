using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HttpServer
{
    public interface RequestHandler
    {
        object GetList();

        object GetSingle(int id);
    }
}
