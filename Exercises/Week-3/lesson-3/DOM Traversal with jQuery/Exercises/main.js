$(".generator").click(function () {
  const computer = $(this).closest(".computer");
  const processorId = computer.find(".processor").attr("id");
  const dataId = computer.data("id");
  const busNumber = computer.find(".BUS").text();

  console.log(`Processor ID: ${processorId}`);
  console.log(`Computer's data-id: ${dataId}`);
  console.log(`BUS: ${busNumber}`);
});

$(".validator").click(function () {
  const computer = $(this).closest(".computer");
  const generatorText = computer.find(".generator").text();
  const mbNumber = computer.find(".MB").text();
  const qrElements = computer.find(".QR");

  console.log(`Generator's text: ${generatorText}`);
  console.log(`MB: ${mbNumber}`);
});
