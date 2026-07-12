
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: "Helvetica",
  },
  header: {
    textAlign: "center",
    borderBottom: "1 solid #000",
    paddingBottom: 10,
    marginBottom: 15,
  },
  company: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sub: {
    fontSize: 11,
    marginTop: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  section: {
    marginTop: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 6,
    borderBottom: "1 solid #999",
    paddingBottom: 3,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#e5e7eb",
    border: "1 solid #000",
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    borderLeft: "1 solid #000",
    borderRight: "1 solid #000",
    borderBottom: "1 solid #000",
  },
  c1: { width: "10%", padding: 5, textAlign: "center" },
  c2: { width: "40%", padding: 5 },
  c3: { width: "10%", padding: 5, textAlign: "center" },
  c4: { width: "20%", padding: 5, textAlign: "right" },
  c5: { width: "20%", padding: 5, textAlign: "right" },
  totals: {
    width: "45%",
    marginLeft: "auto",
    marginTop: 15,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  grand: {
    borderTop: "1 solid #000",
    marginTop: 4,
    paddingTop: 6,
    fontWeight: "bold",
    fontSize: 13,
  },
  footer: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

function InvoicePDF({ bill }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        <View style={styles.header}>
          <Text style={styles.company}>JR Safety &amp; Security System</Text>
          <Text style={styles.sub}>Iyyappanthangal, Chennai</Text>
          <Text style={styles.sub}>CCTV Sales • Installation • Service</Text>
        </View>

        <View style={styles.row}>
          <Text><Text style={{fontWeight:"bold"}}>SERVICE BILL</Text></Text>
          <View>
            <Text>Bill No : {bill.billNumber}</Text>
            <Text>
              Date : {new Date(bill.createdAt).toLocaleDateString("en-GB")}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Customer Details</Text>
          <Text>Name : {bill.customer.name}</Text>
          <Text>Phone : {bill.customer.phone}</Text>
          <Text>Address : {bill.customer.address}</Text>
        </View>

        <View style={styles.tableHeader}>
          <Text style={styles.c1}>#</Text>
          <Text style={styles.c2}>Product</Text>
          <Text style={styles.c3}>Qty</Text>
          <Text style={styles.c4}>Price</Text>
          <Text style={styles.c5}>Amount</Text>
        </View>

        {bill.products.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.c1}>{index + 1}</Text>
            <Text style={styles.c2}>{item.name}</Text>
            <Text style={styles.c3}>{item.qty}</Text>
            <Text style={styles.c4}>₹{item.price}</Text>
            <Text style={styles.c5}>₹{item.amount}</Text>
          </View>
        ))}

        <View style={styles.totals}>
          <View style={styles.totalRow}>
            <Text>Product Total</Text>
            <Text>₹{bill.productTotal}</Text>
          </View>

          <View style={styles.totalRow}>
            <Text>Service Charge</Text>
            <Text>₹{bill.serviceCharge}</Text>
          </View>

          <View style={[styles.totalRow, styles.grand]}>
            <Text>Grand Total</Text>
            <Text>₹{bill.grandTotal}</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text>Thank you for choosing us!</Text>
          <View>
            <Text>__________________</Text>
            <Text>Authorized Signature</Text>
          </View>
        </View>

      </Page>
    </Document>
  );
}

export default InvoicePDF;
