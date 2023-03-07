import React from 'react'
import '../css/InvoiceTotals.css'

export default function InvoiceTotals({totals}) {

    // const { subTotal, tax, discount, total } = invoiceTotals

    return (
        <div className='invoice-totals-cont'>
            <div className='invoice-totals'>
                <ul>
                    <li><b>Subtotal:</b>$ {totals.subtotal}</li>
                    <li><b>Tax:</b>$ 0.00</li>
                    <li><b>Discount:</b>$ 0.00</li>
                </ul>
                <div>
                    <p><b>Total:</b>$ {totals.total}</p>
                </div>
            </div>
        </div>
    )
}
