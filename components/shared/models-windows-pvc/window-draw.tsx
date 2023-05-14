import { WindowModelsEnum } from "@/models/windowPVC.model";
import classNames from "classnames";
import ModelO from "./Windows/ModelO";
import ModelOXX from "./Windows/ModelOXX";
import ModelOXXO from "./Windows/ModelOXXO";
import ModelVLeft from "./Windows/ModelVLeft";
import ModelVO from "./Windows/ModelVO";
import ModelVV from "./Windows/ModelVV";
import ModelXO from "./Windows/ModelXO";
import ModelXX from "./Windows/ModelXX";
import ModelXXO from "./Windows/ModelXXO";
import ModelXXX from "./Windows/ModelXXX";

const WindowDraw = ({
  height,
  width,
  model,
  className,
}: {
  height: number;
  width: number;
  model: WindowModelsEnum;
  className?: string;
}) => {
  switch (model) {
    case WindowModelsEnum.XX:
      return <ModelXX width={width} height={height} />;
    case WindowModelsEnum.XO:
      return <ModelXO width={width} height={height} />;
    case WindowModelsEnum.OXX:
      return <ModelOXX width={width} height={height} />;
    case WindowModelsEnum.XXO:
      return <ModelXXO width={width} height={height} />;
    case WindowModelsEnum.OXXO:
      return <ModelOXXO width={width} height={height} />;
    case WindowModelsEnum.XXX:
      return <ModelXXX width={width} height={height} />;
    case WindowModelsEnum.O:
      return <ModelO width={width} height={height} />;
    case WindowModelsEnum.T:
    case WindowModelsEnum.Z:
      return <ModelVLeft width={width} height={height} />;
    case WindowModelsEnum.ZZ:
      return <ModelVV width={width} height={height} />;
    case WindowModelsEnum.ZO:
      return <ModelVO width={width} height={height} />;

    default:
      return <div className="w-full h-full bg-gray-600">basico</div>;
  }
};
export default WindowDraw;
