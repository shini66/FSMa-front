import header from "../../helpers/title"

const calcularArea = function(base, altura) {
  return (base * altura) / 2;
};

function Area(){

    return (
        <div>
            <p>{header(calcularArea(4, 4), "El area de 4x4 es:")}</p>
        </div>
    )
}

export default Area;