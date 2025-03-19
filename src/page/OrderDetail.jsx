"use client";

import { useState } from "react";
import { Tabs, Tab, TextField, Button, Card, CardContent, CardHeader, Typography, Radio, FormControlLabel, RadioGroup, Divider } from "@mui/material";
import { CreditCard, LocalShipping, Payment, Security } from "@mui/icons-material";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";

export default function BillingDetailsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Navbar/>
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-violet-500 to-purple-600 text-white p-4">
              <Typography variant="h5">Checkout</Typography>
              <Typography variant="body2">Complete your purchase securely</Typography>
            </CardHeader>
            <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)} centered>
              <Tab label="Details" />
              <Tab label="Shipping" />
              <Tab label="Payment" />
            </Tabs>
            <CardContent>
              {activeTab === 0 && (
                <div className="grid gap-4">
                  <TextField label="First Name" variant="outlined" fullWidth />
                  <TextField label="Last Name" variant="outlined" fullWidth />
                  <TextField label="Email" type="email" variant="outlined" fullWidth />
                  <TextField label="Phone Number" type="tel" variant="outlined" fullWidth />
                  <div className="flex justify-between mt-4">
                    <Button variant="outlined" onClick={() => setActiveTab(1)}>
                      Continue to Shipping
                    </Button>
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div className="grid gap-4">
                  <TextField label="Street Address" variant="outlined" fullWidth />
                  <TextField label="City" variant="outlined" fullWidth />
                  <TextField label="State/Province" variant="outlined" fullWidth />
                  <TextField label="ZIP/Postal Code" variant="outlined" fullWidth />
                  <TextField label="Country" variant="outlined" fullWidth />
                  <div className="flex justify-between mt-4">
                    <Button variant="outlined" onClick={() => setActiveTab(0)}>
                      Back
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => setActiveTab(2)}>
                      Continue to Payment
                    </Button>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="grid gap-4">
                  <RadioGroup defaultValue="card">
                    <FormControlLabel value="card" control={<Radio />} label={<><CreditCard /> Credit/Debit Card</>} />
                    <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
                    <FormControlLabel value="apple-pay" control={<Radio />} label="Apple Pay" />
                  </RadioGroup>
                  <TextField label="Card Number" variant="outlined" fullWidth />
                  <div className="grid grid-cols-3 gap-4">
                    <TextField label="Expiry Month" variant="outlined" />
                    <TextField label="Expiry Year" variant="outlined" />
                    <TextField label="CVC" variant="outlined" />
                  </div>
                  <div className="flex justify-between mt-4">
                    <Button variant="outlined" onClick={() => setActiveTab(1)}>
                      Back
                    </Button>
                    <Button variant="contained" color="primary">
                      Complete Purchase
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="sticky top-4 shadow-lg">
            <CardHeader>
              <Typography variant="h6">Order Summary</Typography>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Typography>Premium Headphones - $129.99</Typography>
                <Typography>Smart Watch - $249.99</Typography>
                <Divider />
                <Typography>Subtotal: $379.98</Typography>
                <Typography>Shipping: $9.99</Typography>
                <Typography>Tax: $38.00</Typography>
                <Divider />
                <Typography>Total: $427.97</Typography>
              </div>
            </CardContent>
            <CardContent className="flex items-center gap-2 text-violet-700">
              <Security />
              <Typography>Your payment information is secure and encrypted</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}