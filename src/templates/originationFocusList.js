import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
// import font from "./fonts/Prata-Regular.ttf";

const styles = StyleSheet.create({
  border: {
    backgroundColor: "#0032FF",
    width: "100%",
    height: 6,
  },
  section: {
    paddingVertical: 21,
    paddingHorizontal: 18,
  },
  titleWrapper: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  table: {
    display: "flex",
    width: "100%",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 3,
    paddingTop: 4.5,
  },
  tableColHeader: {
    flex: 1,
    color: "#FFFFFF",
    paddingLeft: 6,
    textAlign: "left",
    fontSize: 7,
  },
  tableCol: {
    flex: 1,
    paddingLeft: 6,
    textAlign: "left",
    fontSize: 7,
  },
  tableCell: {
    fontSize: 10,
    textAlign: "left",
    fontSize: 7,
  },
  fontPrata: {
    fontFamily: "Prata",
  },
});

Font.register({
  family: "Prata",
  src: "https://fonts.gstatic.com/s/prata/v20/6xKhdSpbNNCT-sWCCm7bLnwIcOM.woff2",
});

// Create Document Component
export const MyDocument = () => (
  <Document>
    <Page size='A4'>
      <View style={styles.border} />
      <View style={styles.section}>
        <View style={styles.titleWrapper}>
          <View style={[styles.flexColumn]}>
            <Text
              style={[
                styles.fontPrata,
                { fontSize: "16px", fontFamily: "Prata" },
              ]}
            >
              Origination Focus List
            </Text>
            <Text>Updated Date</Text>
          </View>
          <View style={[styles.flexColumn, { textAlign: "right" }]}>
            <Text
              style={[
                styles.fontPrata,
                {
                  fontSize: "16px",
                  color: "#0032FF",
                },
              ]}
            >
              millenium
            </Text>
            <Text>Icon</Text>
          </View>
        </View>
        {/* Table */}
        <View style={styles.table}>
          {/* Table Header */}
          <View
            style={[
              styles.tableRow,
              { backgroundColor: "#0032FF", marginBottom: 0 },
            ]}
          >
            <View style={styles.tableColHeader}>
              <Text>Status</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text>Co Geography</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text>Sector</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text>Company Name</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text>Ticker</Text>
            </View>
          </View>
          {/* Table Body */}
          {[1, 1].map((company, index) => (
            <View
              key={`${index}`}
              style={[
                styles.tableRow,
                { backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F9F9FA" },
              ]}
            >
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Active</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>US</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Tech</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Example Co</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>EXM</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);
