export default function getTickets() {
    const tickets =[
        {
            id: 1,
            name: 'Adult',
            price: 7.00,
            maxQuantity: 10            
        },
        {
            id: 2,
            name: 'Child',
            price: 5.00,
            maxQuantity: 10
        },
        {  id: 3,
            name: 'Senior',
            price: 5.00,
            maxQuantity: 10
        }
    ]
    return tickets; 
}