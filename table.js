var objDatos = {
  Categorias_row: [],
  Col_Result: ["#", "MAXIMIN", "MAXIMAX", "LAPLACE", "OPTIM-PESIM", "MINIMAX"],
  Demandas_col: ["#"],
  Datos: [],
  Pesos: [],
  Maximin: function () {
    var data = Enumerable.from(objDatos.Datos)
      .orderBy(function (foo) {
        return foo.Value;
      })
      .firstOrDefault();
    return Enumerable.from(objDatos.Datos)
      .where(function (foo) {
        return foo.Value == data.Value;
      })
      .toArray();
  },
  Maximax: function () {
    var data = Enumerable.from(objDatos.Datos)
      .orderByDescending(function (x) {
        return x.Value;
      })
      .firstOrDefault();
    return Enumerable.from(objDatos.Datos)
      .where(function (foo) {
        return foo.Value == data.Value;
      })
      .toArray();
  },
  OptimPesim: function (p) {
    var gradoOpti = parseFloat(p) / 100;
    var gradPsi = (100 - parseFloat(p)) / 100;

    var ganador = 0;
    var indexGanador = 0;

    for (x = 0; x <= objDatos.Categorias_row.length - 1; x++) {
      grandote = Enumerable.from(objDatos.Datos)
        .where(function (foo) {
          return foo.Category == objDatos.Categorias_row[x];
        })
        .orderByDescending(function (foo) {
          return foo.Value;
        })
        .firstOrDefault();

      chiquito = Enumerable.from(objDatos.Datos)
        .where(function (foo) {
          return foo.Category == objDatos.Categorias_row[x];
        })
        .orderBy(function (foo) {
          return foo.Value;
        })
        .firstOrDefault();

      var result = gradoOpti * grandote.Value + gradPsi * chiquito.Value;
      if (result >= ganador) {
        ganador = result;
        indexGanador = x;
      }
    }

    return {
      IndexGanado: indexGanador,
      ResltadoGanador: ganador,
      Ganador: objDatos.Categorias_row[indexGanador],
    };
  },
  Laplace: function () {
    var prom = 0;
    var ganador = "";
    for (x = 0; x <= objDatos.Categorias_row.length - 1; x++) {
      var data = Enumerable.from(objDatos.Datos)
        .where(function (foo) {
          return foo.Category == objDatos.Categorias_row[x];
        })
        .toArray();

      var sum = 0;
      for (y = 0; y <= data.length - 1; y++) sum += parseFloat(data[y].Value);

      var promAux = sum / data.length;

      if (promAux >= prom) {
        prom = promAux;
        ganador = objDatos.Categorias_row[x];
      }
    }

    return { Promedio: prom, Ganador: ganador };
  },
  Minimax: function () {
    var value = 50000;
    var ganador = "";
    for (x = 0; x <= objDatos.Categorias_row.length - 1; x++) {
      var data = Enumerable.from(objDatos.Datos)
        .where(function (foo) {
          return foo.Category == objDatos.Categorias_row[x];
        })
        .orderByDescending(function (foo) {
          return foo.Value;
        })
        .firstOrDefault();

      var valueAux = data.Value;

      if (value >= valueAux) {
        value = valueAux;
        ganador = objDatos.Categorias_row[x];
      }
    }

    return { Ganador: ganador, Value: value };
  },
};

var tHead = $("#tHead");
var tBody = $("#tBody");
//var tHeadR = $("#tHeadR");
//var tBodyR = $("#tBodyR");

//function fn_build_table_reults() {
//    if (objDatos.Col_Result.length > 0 && objDatos.Categorias_row.length > 0) {
//        tHeadR.empty();
//        trHead = $("<tr />").attr("style", "background-color: #3a3a3a;font-size: 20px;color: white;font-weight: bold;");

//        $.each(objDatos.Col_Result, function (k, a) {
//            td = $("<td />").append(a);
//            trHead.append(td);
//        });

//        tHeadR.append(trHead);
//        tBodyR.empty();

//        $.each(objDatos.Categorias_row, function (k, a) {
//            tr = $("<tr />");
//            tdName = $("<td />").append(a).attr("style", "background-color: #3a3a3a;font-size: 20px;color: white;font-weight: bold;");
//            tr.append(tdName);
//            for (x = 0; x <= objDatos.Col_Result.length - 2; x++) {
//                tdValue = $("<td />").addClass("td-value")
//                    .data("data-position", x + 1)
//                    .data("data-obj", { Position: x + 1, Category: a, Value: 0 })
//                    .attr("id", a + (x + 1).toString())

//                tr.append(tdValue);

//                var isAdd = true;
//                if (objDatos.Datos.length > 0) {
//                    for (y = 0; y <= objDatos.Datos.length - 1; y++) {
//                        if (objDatos.Datos[y].Position == (x + 1) && objDatos.Datos[y].Category == a) {
//                            isAdd = false;
//                            break;
//                        }
//                    }
//                }

//                if (isAdd) {
//                    objDatos.Datos.push({ Position: x + 1, Category: a, Value: 0 });
//                }
//            }
//            tBodyR.append(tr);
//        });

//        var valor = parseFloat($("#txtV").val());
//        var maximin = objDatos.Maximin();
//        var maximax = objDatos.Maximax();
//        var laplace = objDatos.Laplace(valor);
//        var opt_pes = objDatos.OptimPesim();
//        var minimax = objDatos.Minimax();

//        console.log(minimax);
//    }
//}

function fn_add_categoria() {
  var value = $("#txtRow").val();
  if (value == "" || value == null || value == undefined) {
    return;
  }

  objDatos.Categorias_row.push(value);
  $("#txtRow").val("");

  fn_build_table();
}

function fn_add_demanda() {
  var value = $("#txtColumn").val();

  if (value == "" || value == null || value == undefined) {
    return;
  }

  var data = {
    Position: objDatos.Demandas_col.length,
    Nombre: value,
  };

  objDatos.Demandas_col.push(data);
  objDatos.Pesos.push(
    $("<input />")
      .attr("type", "number")
      .data("data-column", value)
      .addClass("form-control")
  );

  $("#txtColumn").val("");

  fn_build_table();
}

function fn_build_table() {
  if (objDatos.Demandas_col.length > 0 && objDatos.Categorias_row.length > 0) {
    tHead.empty();
    trHead = $("<tr />").attr(
      "style",
      "background-color: #3a3a3a;font-size: 20px;color: white;font-weight: bold;"
    );

    $.each(objDatos.Demandas_col, function (k, a) {
      td = $("<td />").append(a.Nombre);
      trHead.append(td);
    });

    tHead.append(trHead);
    tBody.empty();

    $.each(objDatos.Categorias_row, function (k, a) {
      tr = $("<tr />");
      tdName = $("<td />")
        .append(a)
        .attr(
          "style",
          "background-color: #3a3a3a;font-size: 20px;color: white;font-weight: bold;"
        );
      tr.append(tdName);
      for (x = 0; x <= objDatos.Demandas_col.length - 2; x++) {
        tdValue = $("<td />")
          .addClass("td-value")
          .append("0")
          .data("data-position", x + 1)
          .data("data-obj", { Position: x + 1, Category: a, Value: 0 })

          .attr("contenteditable", "true");

        tr.append(tdValue);

        var isAdd = true;
        if (objDatos.Datos.length > 0) {
          for (y = 0; y <= objDatos.Datos.length - 1; y++) {
            if (
              objDatos.Datos[y].Position == x + 1 &&
              objDatos.Datos[y].Category == a
            ) {
              isAdd = false;
              break;
            }
          }
        }

        if (isAdd) {
          objDatos.Datos.push({ Position: x + 1, Category: a, Value: 0 });
        }
      }

      tBody.append(tr);
    });

    fn_reload_values();
  }
}

function fn_set_values() {
  var td = $(this);

  var dataObj = td.data("data-obj");
  dataObj.Value = parseFloat(td.text());
  td.data("data-obj", dataObj);
  $.each(objDatos.Datos, function (key, a) {
    if (a.Category == dataObj.Category && a.Position == dataObj.Position) {
      a.Value = dataObj.Value;
    }
  });
}

function fn_reload_values() {
  $(".td-value").each(function () {
    var dataObj = $(this).data("data-obj");
    var value = Enumerable.from(objDatos.Datos)
      .where(function (x) {
        return x.Category == dataObj.Category && x.Position == dataObj.Position;
      })
      .firstOrDefault();
    $(this).text(value.Value);
  });
}

function fn_add_input_pesos() {
  var cont = 0;
  objDatos.Pesos.forEach((element) => {
    label = $("<label/>").append($(element).data("data-column"));
    div = $("<div/>").addClass("col-sm-3");
    div.append(label).append($(element));
    $("#divPesos").append(div);
  });
}

$(document).on("focusout", ".td-value", fn_set_values);
$(document).on("click", "#btnDemanda", fn_add_demanda);
$(document).on("click", "#btnCatgoria", fn_add_categoria);
