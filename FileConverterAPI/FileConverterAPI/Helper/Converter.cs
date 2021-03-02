using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;

namespace FileConverterAPI.Helper
{
    public static  class Converter
    {

        public static string ConvertToJson(string xml)
        {
            try
            {
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(xml);

                string json = JsonConvert.SerializeXmlNode(doc);

                return json;

            }
            catch(Exception ex)
            {
                throw ex;
            }

        }
        public static string ConvertToCSV(string xml)
        {
            return string.Empty;

        }
    }
}