import WordPressDevelopmentSVG from "@/components/FeaturesSVG/WordPressDevelopmentSVG";
import AdobeXDSVG from "@/components/StackSVG/Adobexd";
import AWSIcon from "@/components/StackSVG/amazonwebservices";
import AngularSVG from "@/components/StackSVG/angular";
import AnsibleSVG from "@/components/StackSVG/ansible";
import ApacheCassandra from "@/components/StackSVG/apachecassandra";
import ApacheFlink from "@/components/StackSVG/apacheflink";
import ApacheHadoop from "@/components/StackSVG/apachehadoop";
import ApacheHive from "@/components/StackSVG/apachehive";
import ApacheSparkSVG from "@/components/StackSVG/apachespark";
import ApacheStormSVG from "@/components/StackSVG/apachestorm";
import ArduinoSVG from "@/components/StackSVG/arduino";
import Bamboo from "@/components/StackSVG/bamboo";
import BitdefenderSVG from "@/components/StackSVG/bitdefender";
import Bluetooth from "@/components/StackSVG/bluetooth";
import C from "@/components/StackSVG/c-color";
import CircleCISVG from "@/components/StackSVG/circleci";
import CSS3 from "@/components/StackSVG/css3";
import D3jsSVG from "@/components/StackSVG/d3dotjs";
import DatadogSVG from "@/components/StackSVG/datadog";
import Docker from "@/components/StackSVG/docker";
import ElasticStackSVG from "@/components/StackSVG/elasticstack";
import FigmaSVG from "@/components/StackSVG/figma";
import Firebase from "@/components/StackSVG/firebase";
import Firewalla from "@/components/StackSVG/firewalla";
import Flutter from "@/components/StackSVG/flutter";
import Fortinet from "@/components/StackSVG/fortinet";
import Framer from "@/components/StackSVG/framer";
import GitLabSVG from "@/components/StackSVG/gitlab";
import Go from "@/components/StackSVG/go";
import GoogleCloud from "@/components/StackSVG/googlecloud";
import Grafana from "@/components/StackSVG/grafana";
import GutenbergSVG from "@/components/StackSVG/gutenberg";
import HTML5 from "@/components/StackSVG/html5";
import InVisionSVG from "@/components/StackSVG/invision";
import JavaScriptSVG from "@/components/StackSVG/javascript";
import JenkinsSVG from "@/components/StackSVG/jenkins";
import Keras from "@/components/StackSVG/keras";
import KotlinSVG from "@/components/StackSVG/kotlin";
import Kubernetes from "@/components/StackSVG/kubernetes";
import MarvelApp from "@/components/StackSVG/marvelapp";
import McAfeeSVG from "@/components/StackSVG/mcafee";
import Miro from "@/components/StackSVG/miro";
import MongoDB from "@/components/StackSVG/mongodb";
import MQTT from "@/components/StackSVG/mqtt";
import MySQL from "@/components/StackSVG/mysql";
import NextJS from "@/components/StackSVG/nextdotjs";
import NodeJS from "@/components/StackSVG/nodedotjs";
import NortonSVG from "@/components/StackSVG/norton";
import PaloAltoNetworks from "@/components/StackSVG/paloaltonetworks";
import PostgreSQL from "@/components/StackSVG/postgresql";
import PrometheusSVG from "@/components/StackSVG/prometheus";
import Python from "@/components/StackSVG/python";
import PyTorchSVG from "@/components/StackSVG/pytorch";
import R from "@/components/StackSVG/r";
import RaspberryPiSVG from "@/components/StackSVG/raspberrypi";
import ReactSVG from "@/components/StackSVG/react";
import RedisSVG from "@/components/StackSVG/redis";
import RubyOnRailsSVG from "@/components/StackSVG/rubyonrails";
import ScikitLearnSVG from "@/components/StackSVG/scikitlearn";
import Sketch from "@/components/StackSVG/sketch";
import Slack from "@/components/StackSVG/slack";
import SonarQube from "@/components/StackSVG/sonarqube";
import SplunkSVG from "@/components/StackSVG/splunk";
import SwiftSVG from "@/components/StackSVG/swift";
import Tableau from "@/components/StackSVG/tableau";
import TerraformSVG from "@/components/StackSVG/terraform";
import Trello from "@/components/StackSVG/trello";
import Vault from "@/components/StackSVG/vault";
import VueJsSVG from "@/components/StackSVG/vuedotjs";
import WooCommerce from "@/components/StackSVG/woocommerce";
import WPRocketSVG from "@/components/StackSVG/wprocket";
import YoastSVG from "@/components/StackSVG/yoast";
import Zigbee from "@/components/StackSVG/zigbee";
import { Wifi } from "lucide-react";
import { Lora } from "next/font/google";
import { TLSSocket } from "tls";


  
export const appDevelopmentStack = {
  heading: "Technologies We Use",
  subheading: "Explore the tools we use to create outstanding solutions",
  categories: [
    {
      categoryName: "Mobile",
      stack: [
        { name: "Swift", img: <SwiftSVG/> },
        { name: "Kotlin", img: <KotlinSVG/> },
        { name: "React Native", img: <ReactSVG/> },
        { name: "Flutter", img: <Flutter/> }
      ]
    },
    {
      categoryName: "Web",
      stack: [
        { name: "React", img: <ReactSVG/> },
        { name: "Angular", img: <AngularSVG/> },
        { name: "Vue.js", img: <VueJsSVG/> },
        { name: "Node.js", img: <NodeJS/>}
      ]
    },
    {
      categoryName: "Back-End",
      stack: [
        { name: "Python", img: <Python/> },
        { name: "Java", img: <JavaScriptSVG/> },
        { name: "Ruby on Rails", img: <RubyOnRailsSVG/> },
        { name: "PHP", img: "" }
      ]
    },
    {
      categoryName: "Databases",
      stack: [
        { name: "MySQL", img: <MySQL/> },
        { name: "MongoDB", img: <MongoDB/> },
        { name: "PostgreSQL", img: <PostgreSQL/> },
        { name: "Firebase", img: <Firebase/> }
      ]
    },
    {
      categoryName: "Cloud Services",
      stack: [
        { name: "AWS", img: <AWSIcon/> },
        { name: "Google Cloud", img: <GoogleCloud/> },
        { name: "Microsoft Azure", img: "" }
      ]
    }
  ]
};

export const wordpressStack = {
  heading: "Tools and Technologies We Use for WordPress Development",
  subheading: "Explore the tools we use to create outstanding WordPress solutions",
  categories: [
    {
      categoryName: "WordPress Builder Tools",
      stack: [
        { name: "Elementor", img: <AdobeXDSVG/>, },
        { name: "Divi", img: "" },
        { name: "Gutenberg", img: <GutenbergSVG/> }
      ]
    },
    {
      categoryName: "SEO Tools",
      stack: [
        { name: "Yoast SEO", img: <YoastSVG/> },
        { name: "All-in-One SEO Pack", img: "" }
      ]
    },
    {
      categoryName: "Security",
      stack: [
        { name: "Wordfence", img: <WordPressDevelopmentSVG/> },
        { name: "Sucuri", img: "" }
      ]
    },
    {
      categoryName: "Performance Optimization",
      stack: [
        { name: "WP Rocket", img: <WPRocketSVG/> },
        { name: "W3 Total Cache", img: "" }
      ]
    },
    {
      categoryName: "eCommerce",
      stack: [
        { name: "WooCommerce", img: <WooCommerce/> },
        { name: "Easy Digital Downloads", img: "" }
      ]
    }
  ]
};

export const systemDesignStack = {
  heading: "Tools and Technologies We Use",
  subheading: "Explore the tools and technologies we leverage to create exceptional cloud and infrastructure solutions",
  categories: [
    {
      categoryName: "Cloud Platforms",
      stack: [
        { name: "AWS", img: <AWSIcon/> },
        { name: "Azure", img: "" },
        { name: "Google Cloud", img: <GoogleCloud/> }
      ]
    },
    {
      categoryName: "Databases",
      stack: [
        { name: "MySQL", img: <MySQL/> },
        { name: "PostgreSQL", img: <PostgreSQL/> },
        { name: "MongoDB", img: <MongoDB/> },
        { name: "Redis", img: <RedisSVG/> }
      ]
    },
    {
      categoryName: "Languages",
      stack: [
        { name: "Java", img: <JavaScriptSVG/> },
        { name: "Python", img: <Python/> },
        { name: "Go", img: <Go/> },
        { name: "Node.js", img: <NodeJS/> },
        { name: "C#", img: <C/> }
      ]
    },
    {
      categoryName: "DevOps Tools",
      stack: [
        { name: "Jenkins", img: <JenkinsSVG/>},
        { name: "Docker", img: <Docker/> },
        { name: "Kubernetes", img: <Kubernetes/> },
        { name: "Ansible", img: <AnsibleSVG/> },
        { name: "Terraform", img: <TerraformSVG/> }
      ]
    },
    {
      categoryName: "Monitoring Tools",
      stack: [
        { name: "Grafana", img: <Grafana/>},
        { name: "Prometheus", img: <PrometheusSVG/> },
        { name: "ELK Stack", img: <ElasticStackSVG/> }
      ]
    }
  ]
};

export const automationStack = {
  heading: "Tools and Technologies We Use",
  subheading: "Explore the tools and technologies we use to build innovative IoT solutions",
  categories: [
    {
      categoryName: "IoT Platforms",
      stack: [
        { name: "AWS IoT", img: <AWSIcon/> },
        { name: "Google Cloud IoT", img: <GoogleCloud/>},
        { name: "Microsoft Azure IoT Hub", img: "" }
      ]
    },
    {
      categoryName: "Development Tools",
      stack: [
        { name: "Node-RED", img: <NodeJS/> },
        { name: "MQTT", img: <MQTT/> },
        { name: "Raspberry Pi", img: <RaspberryPiSVG/> },
        { name: "Arduino", img: <ArduinoSVG/> }
      ]
    },
    {
      categoryName: "Connectivity Protocols",
      stack: [
        { name: "Wi-Fi", img: <Wifi/> },
        { name: "Bluetooth", img: <Bluetooth/> },
        { name: "Zigbee", img: <Zigbee/> },
        { name: "LoRa", img: ""},
        { name: "NB-IoT", img: "" }
      ]
    },
    {
      categoryName: "Security Tools",
      stack: [
        { name: "TLS/SSL", img: "" },
        { name: "AES Encryption", img: "" },
        { name: "Firewalls", img: <Firewalla/> }
      ]
    }
  ]
};

export const bigDataStack = {
  heading: "Tools and Technologies We Use",
  subheading: "Explore the powerful tools and technologies we leverage to drive data-driven solutions.",
  categories: [
    {
      categoryName: "Data Management Tools",
      stack: [
        { name: "Hadoop", img: <ApacheHadoop/> },
        { name: "Apache Hive", img: <ApacheHive/> },
        { name: "Apache Flink", img: <ApacheFlink/> },
        { name: "Cassandra", img: <ApacheCassandra/> }
      ]
    },
    {
      categoryName: "Processing Frameworks",
      stack: [
        { name: "Apache Spark", img: <ApacheSparkSVG/>},
        { name: "Kafka", img: "" },
        { name: "Storm", img: <ApacheStormSVG/> }
      ]
    },
    {
      categoryName: "Data Storage",
      stack: [
        { name: "Amazon S3", img: <AWSIcon/> },
        { name: "HDFS", img: "" },
        { name: "Google BigQuery", img:<GoogleCloud/> }
      ]
    },
    {
      categoryName: "Analytics Tools",
      stack: [
        { name: "Tableau", img: <Tableau/> },
        { name: "Power BI", img: "" },
        { name: "Qlik", img: "" }
      ]
    }
  ]
};


export const cyberSecurityStack = {
  heading: "Tools and Technologies We Use",
  subheading: "Explore the tools we use to enhance security and monitoring solutions",
  categories: [
    {
      categoryName: "Security Tools",
      stack: [
        { name: "Cisco", img: "" },
        { name: "Fortinet", img: <Fortinet/> },
        { name: "Palo Alto Networks", img: <PaloAltoNetworks/> }
      ]
    },
    {
      categoryName: "Monitoring Tools",
      stack: [
        { name: "Splunk", img: <SplunkSVG/> },
        { name: "Darktrace", img: "" },
        { name: "SIEM Solutions", img: "" }
      ]
    },
    {
      categoryName: "Cloud Security",
      stack: [
        { name: "AWS Security Hub", img: <AWSIcon/> },
        { name: "Microsoft Azure Security Center", img: "" }
      ]
    },
    {
      categoryName: "Endpoint Protection",
      stack: [
        { name: "Norton", img: <NortonSVG/> },
        { name: "McAfee", img: <McAfeeSVG/> },
        { name: "Bitdefender", img: <BitdefenderSVG/> }
      ]
    }
  ]
};

export const dataScienceStack = {
  heading: "Tools and Technologies We Use",
  subheading: "Explore the tools we use to create outstanding solutions",
  categories: [
    {
      categoryName: "Data Analytics",
      stack: [
        { name: "Python", img: <Python/> },
        { name: "R", img: <R/> },
        { name: "SQL", img: <MySQL/> },
        { name: "Excel", img: "" }
      ]
    },
    {
      categoryName: "Machine Learning",
      stack: [
        { name: "TensorFlow", img: <TerraformSVG/> },
        { name: "Keras", img: <Keras/> },
        { name: "Scikit-learn", img: <ScikitLearnSVG/> },
        { name: "PyTorch", img: <PyTorchSVG/> }
      ]
    },
    {
      categoryName: "Visualization",
      stack: [
        { name: "Power BI", img: "" },
        { name: "Tableau", img: <Tableau/> },
        { name: "D3.js", img: <D3jsSVG/> }
      ]
    },
    {
      categoryName: "Cloud Platforms",
      stack: [
        { name: "AWS", img: <AWSIcon/> },
        { name: "Azure", img: "" },
        { name: "Google Cloud", img: <GoogleCloud/> }
      ]
    }
  ]
};

export const cloudDevopsStack = {
  heading: "Tools and Technologies We Use",
  subheading: "Explore the tools we use to create outstanding solutions",
  categories: [
    {
      categoryName: "Cloud Platforms",
      stack: [
        { name: "AWS", img: <AWSIcon/> },
        { name: "Microsoft Azure", img: "" },
        { name: "Google Cloud Platform (GCP)", img: <GoogleCloud/>}
      ]
    },
    {
      categoryName: "DevOps Tools",
      stack: [
        { name: "Jenkins", img: <JenkinsSVG/> },
        { name: "Docker", img: <Docker/> },
        { name: "Kubernetes", img: <Kubernetes/> },
        { name: "Terraform", img: <TerraformSVG/> },
        { name: "Ansible", img: <AnsibleSVG/> }
      ]
    },
    {
      categoryName: "Security Tools",
      stack: [
        { name: "Vault", img: <Vault/> },
        { name: "SonarQube", img: <SonarQube/> },
        { name: "Splunk", img: <SplunkSVG/> },
        { name: "Datadog", img: <DatadogSVG/> }
      ]
    },
    {
      categoryName: "CI/CD Tools",
      stack: [
        { name: "CircleCI", img: <CircleCISVG/> },
        { name: "GitLab", img: <GitLabSVG/> },
        { name: "Bamboo", img: <Bamboo/> }
      ]
    }
  ]
};

export const uiuxStack = {
  heading: "Our UI/UX Design Process",
  subheading: "Explore the tools we use to create outstanding user experiences",
  categories: [
    {
      categoryName: "Design Tools",
      stack: [
        { name: "Figma", img: <FigmaSVG/> },
        { name: "Adobe XD", img: <AdobeXDSVG/> },
        { name: "Sketch", img: <Sketch/> },
        { name: "InVision", img: <InVisionSVG/> }
      ]
    },
    {
      categoryName: "Prototyping Tools",
      stack: [
        { name: "Axure RP", img: "" },
        { name: "Marvel App", img: <MarvelApp/> },
        { name: "Framer", img: <Framer/> }
      ]
    },
    {
      categoryName: "Collaboration Tools",
      stack: [
        { name: "Miro", img: <Miro/> },
        { name: "Trello", img: <Trello/> },
        { name: "Slack", img: <Slack/> }
      ]
    },
    {
      categoryName: "Development Tools",
      stack: [
        { name: "React", img: <ReactSVG/> },
        { name: "Next.js", img: <NextJS/> },
        { name: "Vue.js", img: <VueJsSVG/> },
        { name: "HTML5", img: <HTML5/> },
        { name: "CSS3", img: <CSS3/> }
      ]
    }
  ]
};

