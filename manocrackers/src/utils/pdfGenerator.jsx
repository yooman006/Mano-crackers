import { jsPDF } from 'jspdf';

export const generateReceipt = (orderData) => {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const itemsPerPage = 15;
  const totalPages = Math.ceil(orderData.items.length / itemsPerPage);

  const addCommonElements = (pageNumber) => {
    doc.setLineWidth(5);
    doc.roundedRect(5, 5, 200, 287, 3, 3);

    // Header
    doc.setFontSize(22);
    doc.setTextColor(16, 185, 129);
    doc.setFont(undefined, 'bold');
    doc.text('MANO Crackers ', 105, 30, null, null, 'center');

    // Contact Info
    doc.setFontSize(12);
    doc.setTextColor(20, 184, 166);
    doc.text('Sivakasi - 626123', 105, 40, null, null, 'center');
    doc.text('Phone: +91 6382737971 | Email: mks_prithi@yahoo.co.in', 105, 46, null, null, 'center');
    
    // Divider
    doc.setDrawColor(16, 185, 129);
    doc.setLineWidth(1);
    doc.line(30, 55, 180, 55);
    
    // Order Header
    doc.setFontSize(16);
    doc.setTextColor(80, 80, 80);
    doc.text('ORDER RECEIPT', 105, 65, null, null, 'center');

    // Order Info
    doc.setFontSize(10);
    doc.setTextColor(16, 185, 129);
    doc.text(`Order Date: ${new Date().toLocaleDateString()}`, 180, 75, null, null, 'right');
    doc.text(`Order ID: ${orderData._id}`, 180, 81, null, null, 'right');
    
    if (pageNumber === 1) {
      doc.setFontSize(12);
      doc.setTextColor(6, 182, 212);
      doc.text('Customer Information:', 20, 85);

      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text(`Name: ${orderData.customer.firstName} ${orderData.customer.lastName}`, 25, 93);
      doc.text(`Email: ${orderData.customer.email}`, 25, 101);
      doc.text(`Phone: ${orderData.customer.phone}`, 25, 109);
      doc.text(`Address: ${orderData.customer.address}, ${orderData.customer.city}, ${orderData.customer.state} - ${orderData.customer.pincode}`, 25, 117);
    }

    doc.text(`Page: ${pageNumber}/${totalPages}`, 180, 285);
  };

  const addItemsTable = (items, startY, pageNumber) => {
    doc.setFontSize(12);
    doc.setTextColor(6, 182, 212);
    doc.text('Order Items:', 20, startY);

    doc.setFillColor(16, 185, 129);
    doc.rect(20, startY + 5, 170, 8, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text('S.No', 25, startY + 10);
    doc.text('Item', 40, startY + 10);
    doc.text('Price', 140, startY + 10);
    doc.text('Qty', 160, startY + 10);
    doc.text('Total', 180, startY + 10);

    let yPos = startY + 15;
    items.forEach((item, index) => {
      const rowColor = index % 2 === 0 ? [240, 253, 250] : [220, 252, 231];
      doc.setFillColor(...rowColor);
      doc.rect(20, yPos - 3, 180, 6, 'F');

      doc.setTextColor(0, 0, 0);
      const serialNumber = (pageNumber - 1) * itemsPerPage + index + 1;

      doc.text(serialNumber.toString(), 25, yPos);
      const itemNameLines = doc.splitTextToSize(item.name, 70);
      const linesNeeded = itemNameLines.length;

      doc.text(itemNameLines, 40, yPos);
      doc.text(`${Math.round(item.price.toFixed(2))}`, 140, yPos);
      doc.text(item.quantity.toString(), 160, yPos);
      doc.text(`${Math.round(item.price * item.quantity).toFixed(2)}`, 180, yPos);

      yPos += 6 * linesNeeded;
    });

    return yPos;
  };

  const addTotalsSection = (yPos) => {
    doc.setFontSize(12);
    doc.setTextColor(6, 182, 212);
    doc.text('Order Summary:', 20, yPos + 10);

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text('Subtotal', 140, yPos + 18);
    doc.text(`: ${Math.round(orderData.totals.subtotal.toFixed(2))}`, 180, yPos + 18);

    if (orderData.totals.discountAmount > 0) {
      doc.text(`Discount `, 140, yPos + 24);
      doc.text(`: -${orderData.totals.discountPercentage}%`, 180, yPos + 24);
      yPos += 6;
    }

    doc.setFont(undefined, 'bold');
    doc.text('Total Amount', 140, yPos + 28);
    doc.text(`: ${Math.round(orderData.totals.total.toFixed(2))}`, 180, yPos + 28);

    // Footer
    doc.setFontSize(12);
    doc.setTextColor(16, 185, 129);
    doc.text(' Thank you for your purchase!', 105, yPos + 50, null, null, 'center');
    doc.setTextColor(0, 0, 0);
    doc.text('For any queries, contact us at mks_prithi@yahoo.co.in', 105, yPos + 56, null, null, 'center');

    // Decorative circles
    doc.setFillColor(16, 185, 129);
    for (let i = 1; i <= 4; i++) {
      doc.circle(30 + (i * 30), yPos + 65, 3, 'F');
    }
  };

  // Generate all pages
  for (let page = 1; page <= totalPages; page++) {
    if (page > 1) {
      doc.addPage();
    }

    addCommonElements(page);

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, orderData.items.length);
    const pageItems = orderData.items.slice(startIndex, endIndex);

    const startY = page === 1 ? 135 : 30;
    let yPos = addItemsTable(pageItems, startY, page);

    if (page === totalPages) {
      addTotalsSection(yPos);
    }
  }

  doc.save(`order_receipt_${orderData._id}.pdf`);
};