from data.bookentry import BookEntry

class OrderBook:
    def __init__(self):
        self.orders: dict[str, BookEntry] = {}

    def add_security(self, sec: str, req_type: str = None, price: float = None):
        if sec not in self.orders:
            self.orders[sec] = BookEntry()
        else:
            print(f"{sec} already exists within orderbook")
        
        if req_type and price is not None:
            self.add_order(sec, req_type, price)

    def add_order(self, sec: str, req_type: str, price: float):
        self.orders[sec].add_order(req_type, price)

    def remove_order(self, sec: str, req_type: str, price: float):
        pass
    
    def get_spread(self, sec: str):
        return self.orders[sec].get_spread()
    
    def get_top(self, sec: str, req_type: str):
        return self.orders[sec].get_top(req_type)

    def remove_security(self, sec: str):
        self.orders[sec].cleanup()
        del self.orders[sec]
        print(f"{sec} removed from dictionary")

    def contains_security(self, sec: str):
        return sec in self.orders

    def to_json(self):
        return {sec: self.orders[sec].to_json() for sec in self.orders}
    
    def to_spread_json(self):
        return {sec: self.orders[sec].to_spread_json() for sec in self.orders if self.get_spread(sec) is not None}
    
    def __str__(self):
        return ",\n".join([f"key={key}:entry=[{self.orders[key]}]" for key in self.orders])
    