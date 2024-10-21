import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Svg,
  Path,
} from "@react-pdf/renderer";
import path from "path";

const fontPath = path.resolve(
  __dirname,
  "../../public/fonts/NimbusSanL-Reg.ttf"
);

Font.register({
  family: "NimbusSanL",
  src: fontPath,
});

Font.register({
  family: "Prata",
  src: "http://fonts.gstatic.com/s/prata/v7/XVTNnV8ZlWWAo1TkpAuMaA.ttf",
});

Font.register({
  family: "Roboto Condensed",
  src: "https://fonts.gstatic.com/s/robotocondensed/v27/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLAgM9QPFUex17.woff2",
});

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
  subtitle: {
    fontFamily: "NimbusSanL",
    fontSize: "12px",
    fontWeight: 400,
    color: "#95989A",
  },
  iconText: {
    fontFamily: "Roboto Condensed",
    fontSize: "9px",
    fontWeight: 300,
    textAlign: "right",
    marginLeft: 2,
  },
  icon: {
    width: 10,
    height: 10,
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
    alignItems: "center",
    height: 15,
    fontFamily: "NimbusSanL",
  },
  tableColHeader: {
    flex: 1,
    color: "#FFFFFF",
    paddingLeft: 6,
    textAlign: "left",
    fontSize: 7,
    fontWeight: 700,
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

export const MyDocument = (props) => (
  <Document>
    <Page size='A4'>
      <View style={styles.border} />
      <View style={styles.section}>
        <View style={styles.titleWrapper}>
          <View style={styles.flexColumn}>
            <Text style={[styles.fontPrata, { fontSize: "16px" }]}>
              Origination Focus List
            </Text>
            <Text style={styles.subtitle}>Updated 9/30/2024</Text>
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
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Svg
                style={{ width: 10, height: 11 }}
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <Path
                  d='M.928 10.784A.934.934 0 0 1 0 9.841V2.47a.937.937 0 0 1 .928-.944h1.66v-.33a.293.293 0 0 1 .29-.291.29.29 0 0 1 .285.292v.33h3.17v-.33a.288.288 0 1 1 .574 0v.33H8.57a.938.938 0 0 1 .928.943v7.37a.936.936 0 0 1-.928.943H.928Zm-.354-.943a.356.356 0 0 0 .354.359h7.6L6.096 8.535a.176.176 0 0 1-.069-.085l-.403-.648a.176.176 0 0 1 .149-.235l.748.113a.17.17 0 0 1 .105.028L8.924 9.28V3.954H.574v5.887Zm0-7.37v.898h8.35v-.898a.356.356 0 0 0-.353-.36H6.908v.33a.288.288 0 1 1-.575 0v-.33h-3.17v.33a.29.29 0 0 1-.285.292.294.294 0 0 1-.29-.292v-.33H.93a.356.356 0 0 0-.354.36Zm3.062 6.232a.335.335 0 1 1 .668.01.335.335 0 0 1-.668-.01Zm-1.607 0a.334.334 0 1 1 .667.01.334.334 0 0 1-.667-.01ZM3.368 7.07a.602.602 0 1 1 .602.612.608.608 0 0 1-.602-.612Zm-1.34 0a.335.335 0 1 1 .205.315.338.338 0 0 1-.204-.315Zm4.955-1.632a.334.334 0 1 1 .667.016.334.334 0 0 1-.666-.016Zm-1.742 0a.334.334 0 1 1 .206.315.34.34 0 0 1-.205-.315Zm-1.605 0a.335.335 0 1 1 .669.015.335.335 0 0 1-.669-.015Zm-1.607 0a.334.334 0 1 1 .667.015.334.334 0 0 1-.667-.015Z'
                  fill='#0A1832'
                />
              </Svg>
              <Text style={styles.iconText}>noahCalendar</Text>
            </View>
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
          {props.companies.map((company, index) => (
            <View
              key={`${index}`}
              style={[
                styles.tableRow,
                { backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F9F9FA" },
              ]}
            >
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Origination Focus List</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{company.region}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{company.sector}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{company.name}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{company.ticker}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);
